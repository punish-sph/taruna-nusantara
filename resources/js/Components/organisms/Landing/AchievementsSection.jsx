import React from "react";
import { motion } from "framer-motion";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import AchievementCard from "@/Components/molecules/AchievementCard";

const Achievements = () => {
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
            <div className="text-center mb-12 space-y-3">
                <Title
                    text="Prestasi Siswa"
                    highlight="Prestasi"
                    size="xl"
                    className="lg:text-5xl"
                    align="center"
                />
                <Description className="max-w-3xl mx-auto text-center">
                    Bangga dengan pencapaian siswa-siswa kami yang telah
                    mengharumkan nama sekolah di berbagai kompetisi dan
                    olimpiade.
                </Description>
            </div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
            >
                {achievements.map((data, i) => (
                    <motion.div key={i} variants={scaleIn}>
                        <AchievementCard {...data} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Achievements;
