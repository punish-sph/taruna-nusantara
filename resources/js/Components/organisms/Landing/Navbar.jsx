import React, { useEffect, useState } from "react";
import {
    HomeIcon,
    InformationCircleIcon,
    ClipboardDocumentListIcon,
    Bars3Icon,
    XMarkIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import NavLinkItem from "@/Components/molecules/NavLinkItem";
import Title from "@/Components/atoms/Title"


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        {
            name: "Dashboard",
            href: "/",
            icon: <HomeIcon className="w-5 h-5" />,
        },
        {
            name: "Tentang Sekolah",
            href: "/tentang",
            icon: <InformationCircleIcon className="w-5 h-5" />,
        },
        {
            name: "Pendaftaran",
            href: "/login",
            icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
        },
    ];

    useEffect(() => {
        const updateScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const progress = (scrollTop / (docHeight - windowHeight)) * 100;
            setScrollProgress(progress);
            setScrolled(scrollTop > 20);
        };

        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-md border-b border-zinc-200"
                    : "bg-white"
            }`}
        >
            <motion.div
                className="h-1"
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.2 }}
            />
            <div className="w-full flex items-center justify-between px-6 py-4">
                <motion.div
                    className=" font-semibold tracking-wide flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-bl from-sky-600 to-sky-700 flex items-center justify-center">
                        <AcademicCapIcon className="w-4 h-4 text-white" />
                    </div>
                    <Title size="lg" className="text-gray-800" text="Taruna Nusantara"/>
                </motion.div>

                <nav className="hidden md:flex space-x-1">
                    {navLinks.map((link, index) => (
                        <div key={link.href}>
                            <NavLinkItem
                                name={link.name}
                                url={link.href}
                                icon={link.icon}
                                activeClass="bg-gradient-to-l from-sky-500 to-sky-700 text-white shadow-lg"
                                inactiveClass="text-zinc-700 hover:bg-zinc-100"
                            />
                        </div>
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none"
                >
                    {menuOpen ? (
                        <XMarkIcon className="w-6 h-6 text-zinc-700" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-zinc-700" />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-zinc-100 shadow-lg"
                    >
                        <nav className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.href}>
                                    <NavLinkItem
                                        name={link.name}
                                        url={link.href}
                                        icon={link.icon}
                                        onClick={() => setMenuOpen(false)}
                                        className="w-full"
                                        activeClass="bg-sky-100 text-sky-700 font-semibold"
                                        inactiveClass="text-zinc-700 hover:bg-zinc-50"
                                    />
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
