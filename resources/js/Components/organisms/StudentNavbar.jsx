import React, { useState } from "react";
import Button from "../../Components/atoms/Button";
import NavLinkItem from "../../Components/molecules/NavLinkItem";
import IconToggle from "../../Components/atoms/IconToggle";
import { router } from "@inertiajs/react";

export default function StudentNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        router.post("/logout");
    };

    const navLinks = [
        { name: "Dashboard", url: "/dashboard" },
        { name: "Data diri", url: "/data-diri" },
        { name: "Pembayaran", url: "/pembayaran" },
        { name: "Chat admin", url: "/chat" },
        { name: "Logout", url: "#" },
    ];

    return (
        <>
            <nav className="w-full p-4 flex justify-between items-center bg-indigo-600">
                <h1 className="text-2xl font-semibold text-white">
                    Taruna Nusantara
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 items-center">
                    {navLinks.map((link, key) =>
                        link.name === "Logout" ? (
                            <li key={key}>
                                <Button
                                    variant="danger"
                                    onClick={handleLogout}
                                    size="md"
                                >
                                    Logout
                                </Button>
                            </li>
                        ) : (
                            <li key={key} className="text-white">
                                <NavLinkItem name={link.name} url={link.url} />
                            </li>
                        )
                    )}
                </ul>

                {/* Hamburger Icon */}
                <IconToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="md:hidden bg-indigo-600 text-white flex flex-col space-y-4 p-4">
                    {navLinks.map((link, key) =>
                        link.name === "Logout" ? (
                            <li key={key}>
                                <Button
                                    variant="danger"
                                    className="w-full py-3"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </li>
                        ) : (
                            <li key={key}>
                                <NavLinkItem
                                    name={link.name}
                                    url={link.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            </li>
                        )
                    )}
                </ul>
            )}
        </>
    );
}
