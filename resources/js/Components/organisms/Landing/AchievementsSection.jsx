import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import AchievementCard from "@/Components/molecules/AchievementCard";

const Achievements = () => {
    const achievements = [
        {
            title: "Juara 1 Olimpiade Sains Nasional",
            description:
                "Meraih juara 1 dalam bidang Fisika pada OSN tingkat nasional dengan prestasi yang membanggakan",
            year: "2024",
            level: "Nasional",
            starDesc: "Prestasi terbaik",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Juara 2 Kompetisi Robotika",
            description:
                "Prestasi gemilang dalam kompetisi robotika tingkat provinsi yang menunjukkan kemampuan teknologi siswa",
            year: "2024",
            level: "Provinsi",
            starDesc: "Prestasi terbaik",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Juara 1 Debat Bahasa Inggris",
            description:
                "Meraih juara 1 dalam kompetisi debat bahasa Inggris antar sekolah dengan kemampuan berbahasa yang luar biasa",
            year: "2023",
            level: "Nasional",
            starDesc: "Prestasi terbaik",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Sekolah Adiwiyata",
            description:
                "Mendapat penghargaan sebagai sekolah peduli lingkungan yang berkomitmen pada kelestarian alam",
            year: "2023",
            level: "Nasional",
            starDesc: "Prestasi terbaik",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const displayedAchievements = achievements.slice(0, 2);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    return (
        <motion.section
            className="relative py-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <div className="text-center mb-10 space-y-3">
                <Title
                    text="Prestasi Siswa"
                    highlight="Prestasi"
                    size="xl"
                    className="lg:text-5xl"
                    align="center"
                />
                <Description className="max-w-2xl mx-auto text-center">
                    Bangga dengan pencapaian siswa-siswa kami yang telah
                    mengharumkan nama sekolah di berbagai kompetisi dan
                    olimpiade.
                </Description>
            </div>

            <div className="space-y-6">
                <AnimatePresence>
                    {displayedAchievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            achievement={achievement}
                            isReversed={index % 2 === 1}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <motion.div
                className="text-center mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    to="/achievements"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Lihat Semua Prestasi
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default Achievements;