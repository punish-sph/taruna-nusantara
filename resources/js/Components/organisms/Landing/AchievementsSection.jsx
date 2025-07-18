import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import {
    ArrowRightIcon,
    TrophyIcon,
    StarIcon,
} from "@heroicons/react/24/outline";
import Title from "@/Components/atoms/Title";
import Badge from "@/Components/atoms/Badge";
import Button from "@/Components/atoms/Button";
import AchievementCard from "@/Components/molecules/AchievementCard";

const Achievements = () => {
    const achievements = [
        {
            title: "Juara 1 Olimpiade Sains Nasional",
            description:
                "Meraih juara 1 dalam bidang Fisika pada OSN tingkat nasional dengan prestasi yang membanggakan dan mengharumkan nama sekolah di seluruh Indonesia",
            year: "2024",
            level: "Nasional",
            rank: "Juara 1",
            starDesc: "Prestasi Terbaik",
            categories: ["Fisika", "Olimpiade", "MIPA", "Sains"],
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Juara 2 Kompetisi Robotika",
            description:
                "Prestasi gemilang dalam kompetisi robotika tingkat provinsi yang menunjukkan kemampuan teknologi siswa dalam bidang engineering dan inovasi",
            year: "2024",
            level: "Provinsi",
            rank: "Juara 2",
            starDesc: "Prestasi Teknologi",
            categories: ["Robotika", "Engineering", "Teknologi"],
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Juara 1 Debat Bahasa Inggris",
            description:
                "Meraih juara 1 dalam kompetisi debat bahasa Inggris antar sekolah dengan kemampuan berbahasa yang luar biasa dan argumentasi yang kuat",
            year: "2023",
            level: "Internasional",
            rank: "Juara 1",
            starDesc: "Prestasi Bahasa",
            categories: ["Bahasa Inggris", "Debat", "Komunikasi"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const displayedAchievements = achievements.slice(0, 6);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const handleViewDetail = (achievement) => {
        console.log("View detail for:", achievement.title);
    };

    return (
        <motion.section
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between lg:items-end mb-7 space-y-3">
                    <div className="space-y-3">
                        <Badge text="Pencapaian Kami" variant="sky" />
                        <Title
                            text="Prestasi Sekolah"
                            highlight="Prestasi"
                            size="xl"
                            className="lg:text-5xl"
                        />
                    </div>
                    <Link href="/achievement"> 
                        <Button
                            variant="primary"
                            icon={ArrowRightIcon}
                            iconPosition="right"
                            animation="pulse"
                            className="mb-2"
                        >
                            Lihat Semua
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedAchievements.map((achievement, index) => (
                        <AchievementCard
                            key={`achievement-${index}`}
                            achievement={achievement}
                            index={index}
                            buttonText="Lihat Detail"
                            onButtonClick={handleViewDetail}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Achievements;
