import React, { useEffect, useState } from "react";
import {
    HomeIcon,
    InformationCircleIcon,
    ClipboardDocumentListIcon,
    Bars3Icon,
    XMarkIcon,
    AcademicCapIcon,
    UserGroupIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import NavLinkItem from "@/Components/molecules/NavLinkItem";
import Title from "@/Components/atoms/Title";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        {
            id: "dashboard",
            name: "Dashboard",
            url: "/",
            icon: <HomeIcon className="w-5 h-5" />,
            isDropdown: false,
        },
        {
            id: "tentang",
            name: "Tentang Sekolah",
            icon: <InformationCircleIcon className="w-5 h-5" />,
            isDropdown: true,
            children: [
                {
                    id: "structure",
                    name: "Struktur Sekolah",
                    url: "/structure",
                    icon: <BuildingLibraryIcon className="w-4 h-4" />,
                },
                {
                    id: "achievement",
                    name: "Prestasi Sekolah",
                    url: "/achievement",
                    icon: <AcademicCapIcon className="w-4 h-4" />,
                },
                {
                    id: "news",
                    name: "Berita Sekolah",
                    url: "/news",
                    icon: <UserGroupIcon className="w-4 h-4" />,
                },
                {
                    id: "facility",
                    name: "Fasilitas Sekolah",
                    url: "/facility",
                    icon: <BuildingLibraryIcon className="w-4 h-4" />,
                },
            ],
        },
        {
            id: "pendaftaran",
            name: "Pendaftaran",
            url: "/pendaftaran",
            icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
            isDropdown: false,
        },
    ];

    useEffect(() => {
        const updateScroll = () => {
            const scrollTop = window.pageYOffset;
            setScrolled(scrollTop > 20);
        };

        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest("header")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-200 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-zinc-200"
                    : "bg-white"
            }`}
        >
            <div className="w-full flex items-center justify-between px-6 py-4">
                <div className="font-semibold tracking-wide flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-bl from-sky-600 to-sky-700 flex items-center justify-center">
                        <AcademicCapIcon className="w-4 h-4 text-white" />
                    </div>
                    <Title
                        size="lg"
                        className="text-gray-800"
                        text="Taruna Nusantara"
                    />
                </div>

                <nav className="hidden md:flex space-x-1">
                    {navLinks.map((link) => (
                        <NavLinkItem
                            key={link.id}
                            name={link.name}
                            url={link.url}
                            icon={link.icon}
                            isDropdown={link.isDropdown}
                            children={link.children}
                            activeClass="bg-sky-100 text-sky-700 font-semibold"
                            inactiveClass="text-zinc-700 hover:bg-zinc-50"
                            dropdownClass="min-w-56 bg-white/95 backdrop-blur-sm"
                        />
                    ))}
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-100 focus:outline-none transition-colors duration-200"
                >
                    {menuOpen ? (
                        <XMarkIcon className="w-6 h-6 text-zinc-700" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-zinc-700" />
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-zinc-100 shadow-lg">
                    <nav className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <NavLinkItem
                                key={link.id}
                                name={link.name}
                                url={link.url}
                                icon={link.icon}
                                onClick={() => {
                                    if (!link.isDropdown) {
                                        setMenuOpen(false);
                                    }
                                }}
                                isDropdown={link.isDropdown}
                                children={link.children?.map(
                                    (child, index) => ({
                                        ...child,
                                        onClick: () => setMenuOpen(false),
                                    })
                                )}
                                className="w-full"
                                activeClass="bg-sky-100 text-sky-700 font-semibold"
                                inactiveClass="text-zinc-700 hover:bg-zinc-50"
                                dropdownClass="bg-gray-50/80 backdrop-blur-sm border-gray-100"
                                isMobile={true}
                            />
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
