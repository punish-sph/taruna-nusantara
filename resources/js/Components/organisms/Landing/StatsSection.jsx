import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import Card from "@/Components/atoms/Card";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:-mt-30 -mt-20 relative z-10"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {schoolStats.map((stat, index) => (
        <motion.div key={index} variants={scaleIn}>
          <Card className="group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col justify-center items-center w-full space-y-2">
              <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center transition-all duration-300 group-hover:bg-sky-100">
                <stat.icon className="w-6 h-6 text-sky-600 group-hover:scale-110 transition-transform" />
              </div>
              <Title
                text={stat.value}
                size="xl"
                className="text-zinc-800 group-hover:text-sky-600 transition-colors duration-300 lg:text-3xl"
              />
              <Description size="sm" className="lg:text-md">
                {stat.label}
              </Description>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default StatsSection;
