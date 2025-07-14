import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    HomeIcon,
    InformationCircleIcon,
    ClipboardDocumentListIcon,
    Bars3Icon,
    XMarkIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";

export default function LandingLayouts({ children }) {
    const { url } = usePage();
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
            href: "/pendaftaran",
            icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
        },
    ];

    // Handle scroll progress
    useEffect(() => {
        const updateScroll = () => {
            // Update scroll progress
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const progress = (scrollTop / (docHeight - windowHeight)) * 100;
            setScrollProgress(progress);
            
            // Update navbar state
            setScrolled(scrollTop > 20);
        };

        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-800 font-sans">
            {/* Header */}
            <header 
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? "bg-white shadow-md border-b border-zinc-200" 
                        : "bg-transparent"
                }`}
            >
                <div className="w-full flex items-center justify-between px-6 py-4">
                    <motion.h1
                        className="text-xl font-semibold tracking-wide text-green-700 flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                            <AcademicCapIcon className="w-4 h-4 text-white" />
                        </div>
                        <span>Taruna Nusantara</span>
                    </motion.h1>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex space-x-1">
                        {navLinks.map((link, index) => {
                            const isActive = url === link.href;
                            return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg"
                                                : "text-zinc-700 hover:bg-zinc-100"
                                        }`}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Mobile hamburger - Simplified */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
                    >
                        {menuOpen ? (
                            <XMarkIcon className="w-6 h-6 text-zinc-700" />
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-zinc-700" />
                        )}
                    </button>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    className="h-1 bg-gradient-to-r from-green-600 to-emerald-700"
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.2 }}
                />

                {/* Mobile Menu - Simplified */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white border-t border-zinc-100 shadow-lg"
                        >
                            <nav className="px-4 py-3">
                                <div className="space-y-1">
                                    {navLinks.map((link) => {
                                        const isActive = url === link.href;
                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full transition-all ${
                                                        isActive
                                                            ? "bg-green-100 text-green-700 font-semibold"
                                                            : "text-zinc-700 hover:bg-zinc-50"
                                                    }`}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    <div className="w-5 h-5 flex items-center justify-center">
                                                        {link.icon}
                                                    </div>
                                                    <span>{link.name}</span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main */}
            <motion.main
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </motion.main>

            {/* Footer */}
            <Footer />
        </div>
    );
}