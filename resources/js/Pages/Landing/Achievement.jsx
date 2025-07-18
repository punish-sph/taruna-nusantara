import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
    TrophyIcon,
    StarIcon,
    CalendarDaysIcon,
    AcademicCapIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";

// Import komponen atoms
import Badge from "@/Components/atoms/Badge";
import Button from "@/Components/atoms/Button";
import Card from "@/Components/atoms/Card";
import Description from "@/Components/atoms/Description";
import Title from "@/Components/atoms/Title";

// Import komponen molecules
import AchievementCard from "@/Components/molecules/AchievementCard";
import FilterSection from "@/Components/molecules/FilterSection";
import LandingLayouts from "@/Components/templates/LandingLayout";

// Data prestasi (dalam aplikasi nyata, ini akan dari API)
const achievementsData = [
    {
        id: 1,
        title: "Juara 1 Olimpiade Sains Nasional Fisika",
        description: "Meraih juara 1 dalam bidang Fisika pada OSN tingkat nasional dengan prestasi yang membanggakan dan mengharumkan nama sekolah di seluruh Indonesia",
        year: "2024",
        level: "Nasional",
        rank: "Juara 1",
        starDesc: "Prestasi Terbaik",
        categories: ["Fisika", "Olimpiade", "MIPA", "Sains"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Juara 2 Kompetisi Robotika Nasional",
        description: "Prestasi gemilang dalam kompetisi robotika tingkat nasional yang menunjukkan kemampuan teknologi siswa dalam bidang engineering dan inovasi",
        year: "2024",
        level: "Nasional",
        rank: "Juara 2",
        starDesc: "Prestasi Teknologi",
        categories: ["Robotika", "Engineering", "Teknologi"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Juara 1 Debat Bahasa Inggris Internasional",
        description: "Meraih juara 1 dalam kompetisi debat bahasa Inggris antar sekolah dengan kemampuan berbahasa yang luar biasa dan argumentasi yang kuat",
        year: "2023",
        level: "Internasional",
        rank: "Juara 1",
        starDesc: "Prestasi Bahasa",
        categories: ["Bahasa Inggris", "Debat", "Komunikasi"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Juara 3 Olimpiade Matematika Provinsi",
        description: "Prestasi membanggakan dalam olimpiade matematika tingkat provinsi yang menunjukkan kemampuan analitis siswa yang luar biasa",
        year: "2024",
        level: "Provinsi",
        rank: "Juara 3",
        starDesc: "Prestasi Akademik",
        categories: ["Matematika", "Olimpiade", "Logika"],
        image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        title: "Juara 1 Lomba Karya Tulis Ilmiah",
        description: "Meraih juara 1 dalam lomba karya tulis ilmiah dengan penelitian inovatif tentang lingkungan dan teknologi ramah lingkungan",
        year: "2023",
        level: "Nasional",
        rank: "Juara 1",
        starDesc: "Prestasi Penelitian",
        categories: ["Penelitian", "Lingkungan", "Inovasi"],
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        title: "Juara 2 Festival Seni Budaya",
        description: "Prestasi membanggakan dalam festival seni budaya dengan pertunjukan tari tradisional yang memukau dan penuh makna",
        year: "2024",
        level: "Kota",
        rank: "Juara 2",
        starDesc: "Prestasi Seni",
        categories: ["Seni", "Budaya", "Tari"],
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 7,
        title: "Juara 1 Kompetisi Coding Nasional",
        description: "Prestasi luar biasa dalam kompetisi programming dengan algoritma inovatif dan solusi kreatif yang menginspirasi",
        year: "2024",
        level: "Nasional",
        rank: "Juara 1",
        starDesc: "Prestasi IT",
        categories: ["Programming", "Algoritma", "Teknologi"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 8,
        title: "Juara 2 Olimpiade Biologi Internasional",
        description: "Prestasi memukau dalam olimpiade biologi tingkat internasional yang menunjukkan keunggulan dalam bidang life science",
        year: "2023",
        level: "Internasional",
        rank: "Juara 2",
        starDesc: "Prestasi Sains",
        categories: ["Biologi", "Sains", "Life Science"],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
];

const categories = ["Semua", "Olimpiade", "Sains", "Teknologi", "Bahasa", "Seni", "Penelitian"];
const levels = ["Semua", "Internasional", "Nasional", "Provinsi", "Kota"];
const years = ["Semua", "2024", "2023", "2022"];

export default function AchievementPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [selectedLevel, setSelectedLevel] = useState("Semua");
    const [selectedYear, setSelectedYear] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter achievements
    const filteredAchievements = useMemo(() => {
        return achievementsData.filter((achievement) => {
            const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "Semua" || 
                                  achievement.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
            const matchesLevel = selectedLevel === "Semua" || achievement.level === selectedLevel;
            const matchesYear = selectedYear === "Semua" || achievement.year === selectedYear;
            
            return matchesSearch && matchesCategory && matchesLevel && matchesYear;
        });
    }, [searchTerm, selectedCategory, selectedLevel, selectedYear]);

    // Reset current page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [filteredAchievements.length]);

    // Pagination
    const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedAchievements = filteredAchievements.slice(startIndex, startIndex + itemsPerPage);

    // Statistics
    const stats = [
        {
            label: "Total Prestasi",
            value: achievementsData.length.toString(),
            icon: TrophyIcon,
            color: "from-yellow-500 to-orange-500"
        },
        {
            label: "Prestasi Internasional",
            value: achievementsData.filter(a => a.level === "Internasional").length.toString(),
            icon: GlobeAltIcon,
            color: "from-purple-500 to-pink-500"
        },
        {
            label: "Prestasi Nasional",
            value: achievementsData.filter(a => a.level === "Nasional").length.toString(),
            icon: AcademicCapIcon,
            color: "from-blue-500 to-cyan-500"
        },
        {
            label: "Tahun Ini",
            value: achievementsData.filter(a => a.year === "2024").length.toString(),
            icon: CalendarDaysIcon,
            color: "from-green-500 to-emerald-500"
        }
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const handleViewDetail = (achievement) => {
        console.log("View detail for:", achievement.title);
        // Implementasi detail view
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResetFilter = () => {
        setSearchTerm("");
        setSelectedCategory("Semua");
        setSelectedLevel("Semua");
        setSelectedYear("Semua");
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section 
                className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 text-white py-20"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge text="Hall of Fame" variant="gold" size="lg" className="mb-6" />
                        <Title 
                            text="Prestasi Sekolah" 
                            highlight="Prestasi"
                            size="6xl" 
                            className="text-white mb-6"
                        />
                        <Description size="lg" color="sky-100" className="mb-8">
                            Kumpulan prestasi membanggakan yang telah diraih siswa-siswi SMA Taruna Nusantara
                            dalam berbagai bidang kompetisi nasional dan internasional. Setiap prestasi adalah
                            bukti dedikasi, kerja keras, dan komitmen terhadap keunggulan akademik.
                        </Description>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">{achievementsData.length}+</div>
                                <div className="text-sky-200 text-sm">Total Prestasi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">
                                    {achievementsData.filter(a => a.level === "Internasional").length}
                                </div>
                                <div className="text-sky-200 text-sm">Internasional</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">
                                    {achievementsData.filter(a => a.level === "Nasional").length}
                                </div>
                                <div className="text-sky-200 text-sm">Nasional</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">
                                    {achievementsData.filter(a => a.year === "2024").length}
                                </div>
                                <div className="text-sky-200 text-sm">Tahun 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Statistics Section */}
            <motion.section 
                className="py-16 bg-white"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <Title text={stat.value} size="3xl" className="mb-2" />
                                    <Description size="sm" color="gray-600">
                                        {stat.label}
                                    </Description>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Filter Section */}
            <FilterSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                filteredCount={filteredAchievements.length}
                totalCount={achievementsData.length}
                categories={categories}
                levels={levels}
                years={years}
                onResetFilter={handleResetFilter}
            />

            {/* Achievements Grid */}
            <motion.section 
                className="py-16 bg-white"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="container mx-auto px-6">
                    {paginatedAchievements.length > 0 ? (
                        <>
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                variants={staggerContainer}
                            >
                                {paginatedAchievements.map((achievement, index) => (
                                    <motion.div key={achievement.id} variants={fadeInUp}>
                                        <AchievementCard
                                            achievement={achievement}
                                            index={index}
                                            buttonText="Lihat Detail"
                                            onButtonClick={handleViewDetail}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <motion.div 
                                    className="mt-12 flex justify-center items-center gap-2"
                                    variants={fadeInUp}
                                >
                                    <Button
                                        variant="outline"
                                        theme="dark"
                                        size="sm"
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Previous
                                    </Button>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <Button
                                            key={page}
                                            variant={currentPage === page ? "primary" : "outline"}
                                            theme="dark"
                                            size="sm"
                                            onClick={() => handlePageChange(page)}
                                            className="min-w-[40px]"
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                    
                                    <Button
                                        variant="outline"
                                        theme="dark"
                                        size="sm"
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </Button>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <motion.div 
                            className="text-center py-20"
                            variants={fadeInUp}
                        >
                            <TrophyIcon className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                            <Title text="Tidak ada prestasi ditemukan" size="xl" className="mb-4" />
                            <Description size="lg" color="gray-500" className="mb-8">
                                Coba ubah filter atau kata kunci pencarian Anda
                            </Description>
                            <Button
                                variant="primary"
                                onClick={handleResetFilter}
                            >
                                Reset Filter
                            </Button>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section 
                className="py-20 bg-gradient-to-r from-sky-600 to-sky-800 text-white"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container mx-auto px-6 text-center">
                    <StarIcon className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <Title 
                        text="Bergabunglah dengan Kami" 
                        size="3xl" 
                        className="text-white mb-6"
                    />
                    <Description size="lg" color="sky-100" className="mb-8 max-w-2xl mx-auto">
                        Raih prestasi terbaikmu dan bergabunglah dengan para juara di SMA Taruna Nusantara.
                        Bersama kami, wujudkan potensi terbaikmu dalam berbagai bidang kompetisi.
                    </Description>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="warning" size="lg" animation="pulse">
                            Daftar Sekarang
                        </Button>
                        <Button variant="outline" theme="light" size="lg" animation="pulse">
                            Pelajari Lebih Lanjut
                        </Button>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

AchievementPage.layout = (page) => <LandingLayouts children={page} />;