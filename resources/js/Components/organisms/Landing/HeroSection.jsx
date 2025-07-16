import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/Button";

const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="relative h-screen max-h-[500px] min-h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80"
                    alt="SMA Taruna Nusantara"
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                        imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 transition-opacity duration-700 ${
                        imageLoaded ? "opacity-0" : "opacity-100"
                    }`}
                ></div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-start h-full text-white px-6 md:px-16">
                <div className="max-w-3xl space-y-8">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-block bg-emerald-500/20 backdrop-blur px-4 py-1.5 rounded-full mb-4">
                                <span className="text-sm font-medium tracking-wide">
                                    Sekolah Unggulan Nasional
                                </span>
                            </div>
                            <motion.h1
                                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.2]"
                                variants={fadeInUp}
                            >
                                SMA <span className="text-emerald-400">Taruna</span> Nusantara
                            </motion.h1>
                        </motion.div>
                        <motion.p
                            className="text-lg md:text-xl opacity-90 leading-relaxed text-zinc-100 max-w-2xl"
                            variants={fadeInUp}
                        >
                            Membentuk Generasi Pemimpin Berintegritas dan Berkarakter untuk Masa Depan Indonesia.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                            variants={fadeInUp}
                        >
                            <Button
                                variant="success"
                                size="md"
                                rounded="full"
                                shadow="lg"
                                animation="pulse"
                                className="text-lg hover:scale-[1.03] transition-transform"
                            >
                                Daftar Sekarang
                            </Button>
                            <Button
                                variant="outline"
                                theme="light"
                                size="md"
                                icon={PlayIcon}
                                iconPosition="left"
                                animation="pulse"
                                rounded="full"
                                shadow="lg"
                            >
                                Tonton Video
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;