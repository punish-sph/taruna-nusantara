import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    AcademicCapIcon,
    UserGroupIcon,
    TrophyIcon,
    CalendarDaysIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ArrowRightIcon,
    StarIcon,
    PlayIcon,
    LightBulbIcon,
    GlobeAltIcon,
    BookOpenIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import LandingLayouts from "@/Layouts/LandingLayouts";
import Button from "@/Components/Button";

export default function LandingPage() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animasi
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
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

    const floatingAnimation = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    // Data
    const schoolStats = [
        { label: "Siswa Aktif", value: "1,200+", icon: UserGroupIcon },
        { label: "Guru Berkualitas", value: "85+", icon: AcademicCapIcon },
        { label: "Prestasi Nasional", value: "50+", icon: TrophyIcon },
        { label: "Tahun Berdiri", value: "1990", icon: CalendarDaysIcon },
    ];

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

    const features = [
        {
            title: "Kurikulum Inovatif",
            description: "Kurikulum berbasis kompetensi dengan pendekatan STEM",
            icon: LightBulbIcon,
        },
        {
            title: "Fasilitas Modern",
            description: "Laboratorium sains dan teknologi terkini",
            icon: GlobeAltIcon,
        },
        {
            title: "Program Literasi",
            description: "Pengembangan budaya literasi melalui program khusus",
            icon: BookOpenIcon,
        },
        {
            title: "Pengembangan Karakter",
            description: "Pembentukan karakter melalui kegiatan kepemimpinan",
            icon: ShieldCheckIcon,
        },
    ];

    return (
        <div className="space-y-10">
            {/* Hero Section */}
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
                    {/* Overlay fallback saat gambar belum dimuat */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 transition-opacity duration-700 ${
                            imageLoaded ? "opacity-0" : "opacity-100"
                        }`}
                    ></div>
                </div>

                {/* Gradient overlay atas gambar */}
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

            <div className="px-4 md:px-8 space-y-16 md:space-y-24 pb-16">
                {/* Stats Section */}
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

                {/* School Profile Section */}
                <motion.section
                    className="relative"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
                    
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeInLeft} className="relative">
                                <div className="space-y-6">
                                    <div>
                                        <span className="inline-block text-emerald-600 font-medium tracking-wide mb-2">
                                            Tentang Kami
                                        </span>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                            Profil <span className="text-emerald-600">Sekolah</span>
                                        </h2>
                                    </div>
                                    
                                    <div className="space-y-4 text-gray-600">
                                        <p className="text-base leading-relaxed">
                                            SMA Taruna Nusantara adalah sekolah menengah atas yang berkomitmen untuk membentuk generasi muda yang berintegritas, berkarakter, dan siap menghadapi tantangan masa depan.
                                        </p>
                                        <p className="text-base leading-relaxed">
                                            Dengan kurikulum komprehensif dan fasilitas modern, kami memberikan pendidikan terbaik yang menggabungkan akademik dan pengembangan karakter.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                    <feature.icon className="w-5 h-5 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInRight}
                                className="relative"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                            alt="SMA Taruna Nusantara"
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <div className="text-white">
                                            <h3 className="text-xl font-bold mb-2">Visi Sekolah</h3>
                                            <p className="text-emerald-200">
                                                Menjadi sekolah unggulan yang menghasilkan lulusan berintegritas tinggi dan berdaya saing global
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-4 py-3">
                                        <MapPinIcon className="w-5 h-5 text-emerald-600" />
                                        <span className="text-gray-700 font-medium">
                                            Jl. Pendidikan No. 123, Jakarta Selatan
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-4 py-3">
                                        <PhoneIcon className="w-5 h-5 text-emerald-600" />
                                        <span className="text-gray-700 font-medium">
                                            (021) 1234-5678
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* News Section */}
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

                {/* Achievements Section */}
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

                {/* CTA Section */}
                <motion.section
                    className="relative rounded-3xl overflow-hidden"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10"></div>
                    </div>
                    
                    <div className="relative z-10 py-16 px-6 md:px-12 text-center">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-white font-medium tracking-wide">
                                    Bergabunglah dengan Kami
                                </span>
                            </motion.div>
                            
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Siap Menjadi Bagian dari <span className="text-emerald-200">Komunitas Kami</span>?
                            </motion.h2>
                            
                            <motion.p
                                className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Daftarkan diri Anda sekarang dan jadilah bagian dari komunitas pembelajaran yang menginspirasi untuk meraih masa depan yang gemilang.
                            </motion.p>
                            
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.div variants={scaleIn}>
                                    <Button
                                        variant="outline"
                                        size="md"
                                        animation="bounce"
                                        rounded="full"
                                    >
                                        Daftar Sekarang
                                    </Button>
                                </motion.div>
                                <motion.div variants={scaleIn}>
                                    <Button
                                        variant="outline"
                                        theme="light"
                                        size="md"
                                        animation="bounce"
                                        rounded="full"
                                    >
                                        Hubungi Kami
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

LandingPage.layout = (page) => <LandingLayouts children={page} />;