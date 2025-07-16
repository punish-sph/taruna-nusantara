import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";

const NewsSection = () => {
    const newsData = [
        {
            id: 1,
            title: "Penerimaan Siswa Baru 2024/2025 Telah Dibuka",
            excerpt:
                "Pendaftaran siswa baru tahun ajaran 2024/2025 telah resmi dibuka dengan berbagai program unggulan.",
            date: "15 Juli 2024",
            category: "Pendaftaran",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 2,
            title: "Juara 1 Olimpiade Matematika Tingkat Nasional",
            excerpt:
                "Tim matematika SMA Taruna Nusantara berhasil meraih juara 1 dalam olimpiade matematika tingkat nasional.",
            date: "10 Juli 2024",
            category: "Prestasi",
            image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 3,
            title: "Workshop Teknologi AI untuk Siswa Kelas XI",
            excerpt:
                "Sekolah mengadakan workshop teknologi AI untuk meningkatkan kemampuan siswa dalam bidang teknologi.",
            date: "8 Juli 2024",
            category: "Kegiatan",
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                <div>
                    <span className="inline-block text-emerald-600 font-medium tracking-wide mb-2">
                        Informasi Terkini
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Berita & <span className="text-emerald-600">Pengumuman</span>
                    </h2>
                </div>
                <Button
                    variant="ghost"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                    animation="slide"
                    className="text-emerald-600 hover:text-emerald-700 font-medium mt-4 md:mt-0"
                >
                    Lihat Semua
                </Button>
            </div>

            <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
            >
                {newsData.map((news) => (
                    <motion.article
                        key={news.id}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        variants={scaleIn}
                        whileHover={{ y: -10 }}
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4">
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {news.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                                <CalendarDaysIcon className="w-4 h-4" />
                                <span>{news.date}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-3 text-lg group-hover:text-emerald-600 transition-colors">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-2">
                                {news.excerpt}
                            </p>
                            <Button
                                variant="minimal"
                                animation="slide"
                                className="text-emerald-600 hover:text-emerald-700 font-medium"
                            >
                                Baca Selengkapnya
                            </Button>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default NewsSection;