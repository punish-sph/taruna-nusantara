import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/organisms/Landing/Navbar";
import Footer from "@/Components/organisms/Landing/Footer";
import { motion } from "framer-motion";

export default function LandingLayouts({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-800 font-sans">
            <Head title="Taruna Nusantara" />

            <Navbar />

            <motion.main
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </motion.main>

            <Footer />
        </div>
    );
}
