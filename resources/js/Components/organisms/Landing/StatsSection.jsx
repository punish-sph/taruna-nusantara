import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

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
      className=""
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-r from-sky-900 to-sky-500 p-7 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-sky-600">
        <motion.div 
          className="grid lg:grid-cols-4 grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {schoolStats.map((stat, index) => (
            <motion.div key={index} variants={scaleIn}>
              <div className="group flex flex-col justify-center items-center w-full">
                <Title
                  text={stat.value}
                  size="xl"
                  className="text-white group-hover:text-sky-100 transition-colors duration-300 lg:text-5xl"
                />
                <Description size="sm" className="lg:text-md text-sky-100 text-center">
                  {stat.label}
                </Description>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;