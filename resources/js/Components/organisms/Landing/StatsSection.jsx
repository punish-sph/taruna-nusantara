import React from "react";
import { motion } from "framer-motion";
import {
    AcademicCapIcon,
    UserGroupIcon,
    TrophyIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const StatsSection = () => {
    const schoolStats = [
        { label: "Siswa Aktif", value: "1,200+", icon: UserGroupIcon },
        { label: "Guru Berkualitas", value: "85+", icon: AcademicCapIcon },
        { label: "Prestasi Nasional", value: "50+", icon: TrophyIcon },
        { label: "Tahun Berdiri", value: "1990", icon: CalendarDaysIcon },
    ];

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
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-16 relative z-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
        >
            {schoolStats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="p-5 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                >
                    <div className="flex justify-center mb-3">
                        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default StatsSection;