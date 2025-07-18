import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import BadgeLabel from "@/Components/atoms/Badge";
import TitleSection from "@/Components/atoms/Title";
import Button from "@/Components/atoms/Button";
import UiCard from "@/Components/molecules/UiCard";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: "Penerimaan Siswa Baru 2024/2025 Telah Dibuka",
      excerpt:
        "Pendaftaran siswa baru tahun ajaran 2024/2025 telah resmi dibuka dengan berbagai program unggulan.",
      date: "15 Juli 2024",
      category: "Pendaftaran",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      buttontext: "Baca selengkapnya"
    },
    {
      id: 2,
      title: "Juara 1 Olimpiade Matematika Tingkat Nasional",
      excerpt:
        "Tim matematika SMA Taruna Nusantara berhasil meraih juara 1 dalam olimpiade matematika tingkat nasional.",
      date: "10 Juli 2024",
      category: "Prestasi",
      image:
        "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      buttontext: "Baca selengkapnya"
    },
    {
      id: 3,
      title: "Workshop Teknologi AI untuk Siswa Kelas XI",
      excerpt:
        "Sekolah mengadakan workshop teknologi AI untuk meningkatkan kemampuan siswa dalam bidang teknologi.",
      date: "8 Juli 2024",
      category: "Kegiatan",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      buttontext: "Baca selengkapnya"
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
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex flex-col md:flex-row justify-between lg:items-end mb-7 space-y-3">
        <div className="space-y-3">
          <BadgeLabel text="informasi terkini" variant="sky" />
          <TitleSection
            text="Berita & Pengumuman"
            highlight="Pengumuman"
            size="xl"
            className="lg:text-5xl"
          />
        </div>

        <Button
          variant="primary"
          icon={ArrowRightIcon}
          iconPosition="right"
          animation="pulse"
          className="mb-2"
        >
          Lihat Semua
        </Button>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {newsData.map((news) => (
          <motion.div key={news.id} variants={scaleIn} whileHover={{ y: -10 }}>
            <UiCard {...news} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default NewsSection;
