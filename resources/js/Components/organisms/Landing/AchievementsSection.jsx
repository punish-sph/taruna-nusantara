import React from "react";
import { motion } from "framer-motion";
import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Juara 1 Olimpiade Sains Nasional",
            description:
                "Meraih juara 1 dalam bidang Fisika pada OSN tingkat nasional",
            year: "2024",
            level: "Nasional",
        },
        {
            title: "Juara 2 Kompetisi Robotika",
            description:
                "Prestasi gemilang dalam kompetisi robotika tingkat provinsi",
            year: "2024",
            level: "Provinsi",
        },
        {
            title: "Juara 1 Debat Bahasa Inggris",
            description:
                "Meraih juara 1 dalam kompetisi debat bahasa Inggris antar sekolah",
            year: "2023",
            level: "Nasional",
        },
        {
            title: "Sekolah Adiwiyata",
            description:
                "Mendapat penghargaan sebagai sekolah peduli lingkungan",
            year: "2023",
            level: "Nasional",
        },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const scaleIn = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
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
        <motion.section
            className="relative py-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden -z-10 opacity-10">
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-400 rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-300 rounded-full"></div>
            </div>
            
            <div className="text-center mb-12">
                <span className="inline-block text-emerald-600 font-medium tracking-wide mb-2">
                    Kebanggaan Sekolah
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Prestasi <span className="text-emerald-600">Siswa</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Bangga dengan pencapaian siswa-siswa kami yang telah mengharumkan nama sekolah di berbagai kompetisi dan olimpiade.
                </p>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
            >
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        variants={scaleIn}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-100 transition-colors">
                                    <TrophyIcon className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-gray-500">
                                        {achievement.year}
                                    </div>
                                    <div className="font-semibold text-yellow-600">
                                        {achievement.level}
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-emerald-600 transition-colors">
                                {achievement.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                {achievement.description}
                            </p>
                            <div className="flex items-center gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default AchievementsSection;