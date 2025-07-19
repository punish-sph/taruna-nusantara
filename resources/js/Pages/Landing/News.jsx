import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import LandingLayouts from "@/Components/templates/LandingLayout";
import NewsGrid from "@/Components/organisms/Landing/News/NewsGrid";
import NewsFilters from "@/Components/organisms/Landing/News/NewsFilters";
import NewsDetail from "@/Components/organisms/Landing/News/NewsDetail";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

export default function NewsPage() {
    // Mock data berita - menggunakan useMemo untuk mencegah recreate
    const newsData = useMemo(() => [
        {
            id: 1,
            title: "Penerimaan Siswa Baru Tahun Ajaran 2024/2025 Telah Dibuka",
            slug: "penerimaan-siswa-baru-2024-2025",
            content: "Pendaftaran siswa baru tahun ajaran 2024/2025 telah resmi dibuka dengan berbagai program unggulan. Calon siswa dapat mendaftar melalui sistem online yang telah disediakan dengan syarat dan ketentuan yang berlaku. SMA Taruna Nusantara membuka kesempatan bagi calon siswa untuk bergabung dalam lingkungan pendidikan yang berkualitas dengan fasilitas modern dan tenaga pengajar yang berpengalaman.",
            excerpt: "Pendaftaran siswa baru tahun ajaran 2024/2025 telah resmi dibuka dengan berbagai program unggulan. Calon siswa dapat mendaftar melalui sistem online yang telah disediakan.",
            category: "Pendaftaran",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Admin Sekolah",
            date: "15 Juli 2024"
        },
        {
            id: 2,
            title: "Siswa SMA Taruna Nusantara Raih Juara 1 Olimpiade Matematika Nasional",
            slug: "juara-1-olimpiade-matematika-nasional-2024",
            content: "Tim matematika SMA Taruna Nusantara berhasil meraih juara 1 dalam olimpiade matematika tingkat nasional. Prestasi ini merupakan hasil kerja keras dan dedikasi dari siswa dan guru pembimbing. Kompetisi yang diikuti oleh lebih dari 500 sekolah dari seluruh Indonesia ini menguji kemampuan siswa dalam memecahkan soal-soal matematika tingkat tinggi.",
            excerpt: "Tim matematika SMA Taruna Nusantara berhasil meraih juara 1 dalam olimpiade matematika tingkat nasional. Prestasi ini merupakan hasil kerja keras dan dedikasi dari siswa dan guru pembimbing.",
            category: "Prestasi",
            image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Guru MIPA",
            date: "10 Juli 2024"
        },
        {
            id: 3,
            title: "Workshop Teknologi AI dan Machine Learning untuk Siswa Kelas XI",
            slug: "workshop-teknologi-ai-machine-learning-kelas-xi",
            content: "Sekolah mengadakan workshop teknologi AI dan Machine Learning untuk meningkatkan kemampuan siswa dalam bidang teknologi modern. Workshop ini dihadiri oleh seluruh siswa kelas XI dengan narasumber dari industri teknologi. Workshop berlangsung selama 3 hari dengan materi yang mencakup pengenalan AI, Machine Learning basics, dan praktik langsung menggunakan Python.",
            excerpt: "Sekolah mengadakan workshop teknologi AI dan Machine Learning untuk meningkatkan kemampuan siswa dalam bidang teknologi modern. Workshop ini dihadiri oleh seluruh siswa kelas XI.",
            category: "Kegiatan",
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Kepala Sekolah",
            date: "8 Juli 2024"
        },
        {
            id: 4,
            title: "Pengumuman Libur Semester dan Kegiatan Remedial",
            slug: "pengumuman-libur-semester-kegiatan-remedial",
            content: "Pengumuman resmi mengenai jadwal libur semester genap dan kegiatan remedial untuk siswa yang memerlukan perbaikan nilai. Kegiatan remedial akan dilaksanakan sebelum libur semester dimulai. Libur semester akan berlangsung dari tanggal 15 Juli hingga 15 Agustus 2024. Selama periode ini, sekolah akan tutup kecuali untuk kegiatan remedial dan administrasi.",
            excerpt: "Pengumuman resmi mengenai jadwal libur semester genap dan kegiatan remedial untuk siswa yang memerlukan perbaikan nilai.",
            category: "Pengumuman",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Admin Sekolah",
            date: "5 Juli 2024"
        },
        {
            id: 5,
            title: "Program Pertukaran Pelajar dengan Sekolah Internasional",
            slug: "program-pertukaran-pelajar-sekolah-internasional",
            content: "SMA Taruna Nusantara membuka kesempatan program pertukaran pelajar dengan sekolah mitra internasional. Program ini bertujuan untuk memperluas wawasan dan kemampuan berbahasa asing siswa. Program pertukaran akan dilaksanakan selama 6 bulan dengan sekolah mitra di Singapura dan Malaysia. Siswa terpilih akan mengikuti pembelajaran di sekolah mitra sambil menjadi duta budaya Indonesia.",
            excerpt: "SMA Taruna Nusantara membuka kesempatan program pertukaran pelajar dengan sekolah mitra internasional untuk memperluas wawasan siswa.",
            category: "Akademik",
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Kepala Sekolah",
            date: "3 Juli 2024"
        },
        {
            id: 6,
            title: "Festival Sains dan Teknologi Tingkat Sekolah Menengah",
            slug: "festival-sains-teknologi-tingkat-sekolah-menengah",
            content: "SMA Taruna Nusantara akan menjadi tuan rumah Festival Sains dan Teknologi tingkat sekolah menengah se-Jawa Barat. Event ini akan menampilkan berbagai inovasi dan penelitian siswa. Festival akan berlangsung selama 2 hari dengan berbagai kompetisi meliputi robot, karya ilmiah, eksperimen sains, dan presentasi teknologi. Diperkirakan akan diikuti oleh lebih dari 100 sekolah.",
            excerpt: "SMA Taruna Nusantara akan menjadi tuan rumah Festival Sains dan Teknologi tingkat sekolah menengah se-Jawa Barat.",
            category: "Kegiatan",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            isActive: true,
            author: "Guru MIPA",
            date: "1 Juli 2024"
        }
    ], []);

    const [filteredNews, setFilteredNews] = useState(newsData);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    // Filter handler dengan useCallback untuk mencegah infinite re-render
    const handleFilterChange = useCallback((filters) => {
        let filtered = [...newsData];

        // Search filter
        if (filters.search) {
            filtered = filtered.filter(news =>
                news.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                news.content.toLowerCase().includes(filters.search.toLowerCase()) ||
                news.category.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        // Category filter
        if (filters.categories.length > 0) {
            filtered = filtered.filter(news =>
                filters.categories.includes(news.category.toLowerCase())
            );
        }

        // Sort
        switch (filters.sort) {
            case "oldest":
                filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case "title_asc":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "title_desc":
                filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "newest":
            default:
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }

        setFilteredNews(filtered);
    }, [newsData]);

    const handleViewDetail = useCallback((news) => {
        setSelectedNews(news);
        setIsDetailOpen(true);
    }, []);

    const handleCloseDetail = useCallback(() => {
        setIsDetailOpen(false);
        setTimeout(() => setSelectedNews(null), 300);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <NewspaperIcon className="w-10 h-10" />
                            </div>
                        </motion.div>

                        <Badge text="Pusat Informasi" variant="white" className="mb-4" />
                        <Title
                            text="Berita & Pengumuman"
                            size="3xl"
                            className="text-white mb-4 lg:text-6xl"
                            align="center"
                        />
                        <Description
                            size="lg"
                            color="sky-100"
                            align="center"
                            className="max-w-2xl mx-auto"
                        >
                            Dapatkan informasi terbaru seputar kegiatan, prestasi, dan pengumuman penting dari SMA Taruna Nusantara
                        </Description>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Filters */}
                    <NewsFilters onFilterChange={handleFilterChange} />

                    {/* News Grid */}
                    <NewsGrid
                        news={filteredNews}
                        onViewDetail={handleViewDetail}
                    />
                </div>
            </div>

            {/* News Detail Modal */}
            <NewsDetail
                news={selectedNews}
                isOpen={isDetailOpen}
                onClose={handleCloseDetail}
            />
        </div>
    );
}

NewsPage.layout = (page) => <LandingLayouts children={page} />;