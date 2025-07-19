import React, { useState, useEffect, useMemo, useCallback } from "react";
import LandingLayouts from "@/Components/templates/LandingLayout";
import AchievementFilters from "@/Components/organisms/Landing/Achievement/AchievementFilters";
import AchievementGrid from "@/Components/organisms/Landing/Achievement/AchievementGrid";
import AchievementDetail from "@/Components/organisms/Landing/Achievement/AchievementDetail";

import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

const ACHIEVEMENTS_DATA = [
    {
        id: 1,
        title: "Juara 1 Olimpiade Sains Nasional",
        description:
            "Meraih juara 1 dalam bidang Fisika pada OSN tingkat nasional dengan prestasi yang membanggakan.",
        year: "2024",
        level: "Nasional",
        rank: "Juara 1",
        category: "Sains",
        categories: ["Fisika", "Olimpiade", "MIPA"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "15 Agustus 2024",
        location: "Jakarta Convention Center, Jakarta",
        organizer: "Kementerian Pendidikan dan Kebudayaan RI",
        participants: "500+ peserta dari 34 provinsi",
        coach: "Dr. Ahmad Susanto, M.Pd",
        student: "Rizki Pratama Putra",
        class: "XI MIPA 1",
        detailDescription:
            "Prestasi gemilang ini merupakan culmination dari persiapan intensif selama 8 bulan dengan bimbingan khusus dari tim guru pembimbing olimpiade. Rizki Pratama Putra berhasil menunjukkan kemampuan analisis yang luar biasa dalam menyelesaikan soal-soal fisika tingkat tinggi. Kompetisi ini terdiri dari 3 tahap: tes tertulis, praktikum laboratorium, dan presentasi project.",
        achievements: [
            "Skor tertinggi dalam tes tertulis (98/100)",
            "Best Performance dalam praktikum laboratorium",
            "Penghargaan khusus untuk Problem Solving Innovation",
        ],
    },
    {
        id: 2,
        title: "Juara 2 Kompetisi Robotika",
        description:
            "Prestasi gemilang dalam kompetisi robotika tingkat provinsi yang menunjukkan kemampuan teknologi siswa.",
        year: "2024",
        level: "Provinsi",
        rank: "Juara 2",
        category: "Teknologi",
        categories: ["Robotika", "Engineering", "Teknologi"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "22 Juli 2024",
        location: "Universitas Indonesia, Depok",
        organizer: "Dinas Pendidikan Provinsi Jawa Barat",
        participants: "150+ tim robotika se-Jawa Barat",
        coach: "Ir. Bambang Setiawan, M.T",
        student: "Tim Robotika SMAN Taruna",
        class: "XI & XII MIPA",
        detailDescription:
            "Tim robotika SMA Taruna Nusantara berhasil menciptakan robot autonomous yang mampu menyelesaikan tantangan navigasi dan manipulasi objek dengan tingkat akurasi tinggi. Robot 'TARUBOT-X' berhasil melewati semua rintangan dalam waktu record dan mendapat apresiasi dari juri internasional.",
        achievements: [
            "Robot tercepat dalam kategori Line Following",
            "Innovation Award untuk desain mechanical",
            "Nominasi Best Team Collaboration",
        ],
    },
    {
        id: 3,
        title: "Juara 1 Debat Bahasa Inggris",
        description:
            "Meraih juara 1 dalam kompetisi debat bahasa Inggris dengan kemampuan berbahasa yang luar biasa.",
        year: "2024",
        level: "Internasional",
        rank: "Juara 1",
        category: "Bahasa",
        categories: ["Bahasa Inggris", "Debat", "Komunikasi"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "10 September 2024",
        location: "Singapore International School",
        organizer: "ASEAN Youth Debate Championship",
        participants: "200+ debater dari 15 negara ASEAN",
        coach: "Mrs. Sarah Johnson, M.A",
        student: "Ananda Putri Maharani",
        class: "XII IPS 2",
        detailDescription:
            "Kompetisi debat bahasa Inggris tingkat ASEAN ini mengangkat tema 'Climate Action and Youth Leadership'. Ananda berhasil memukau juri dengan argumentasi yang solid, data yang akurat, dan delivery yang percaya diri. Prestasi ini membuat Indonesia bangga di kancah internasional.",
        achievements: [
            "Best Speaker Award dalam Final Round",
            "Most Convincing Argument dalam Semi Final",
            "Youth Ambassador untuk Climate Action 2025",
        ],
    },
    {
        id: 4,
        title: "Juara 1 Festival Seni dan Budaya",
        description:
            "Prestasi membanggakan dalam festival seni dan budaya dengan penampilan tari tradisional yang memukau.",
        year: "2023",
        level: "Kota",
        rank: "Juara 1",
        category: "Seni",
        categories: ["Seni", "Budaya", "Tari"],
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "17 Agustus 2023",
        location: "Gedung Kesenian Jakarta",
        organizer: "Dinas Kebudayaan DKI Jakarta",
        participants: "100+ grup seni se-DKI Jakarta",
        coach: "I Wayan Sujana, S.Sn",
        student: "Sanggar Tari Taruna Nusantara",
        class: "X, XI, XII (Ekstrakurikuler)",
        detailDescription:
            "Penampilan tari kreasi 'Harmony of Archipelago' berhasil memadukan berbagai gerakan tari tradisional Nusantara dengan musik kontemporer. Koreografi yang apik dan kostum yang memukau membuat penonton terpesona dan juri memberikan standing ovation.",
        achievements: [
            "Koreografi Terbaik Festival 2023",
            "Kostum Tradisional Terfavorit",
            "Penampilan Paling Menginspirasi",
        ],
    },
    {
        id: 5,
        title: "Juara 2 Kompetisi Programming",
        description:
            "Prestasi luar biasa dalam kompetisi programming yang menunjukkan kemampuan coding siswa.",
        year: "2023",
        level: "Nasional",
        rank: "Juara 2",
        category: "Teknologi",
        categories: ["Programming", "Coding", "Algoritma"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "25 November 2023",
        location: "Institut Teknologi Bandung",
        organizer: "Indonesian Programming Contest Association",
        participants: "300+ programmer dari seluruh Indonesia",
        coach: "Dr. Budi Rahardjo, M.Kom",
        student: "Tim Algorithm Masters",
        class: "XI & XII MIPA",
        detailDescription:
            "Kompetisi programming tingkat nasional ini menguji kemampuan problem solving dan algoritma dalam waktu terbatas. Tim berhasil menyelesaikan 8 dari 10 soal dengan waktu penalty yang minimal. Solusi yang elegant dan efficient menjadi kunci sukses meraih posisi kedua.",
        achievements: [
            "Fastest Solution untuk Problem Dynamic Programming",
            "Most Elegant Code dalam kategori Graph Theory",
            "Tim Termuda yang masuk Final Round",
        ],
    },
    {
        id: 6,
        title: "Juara 1 Basket Putri SMA",
        description:
            "Tim basket putri meraih juara 1 dalam turnamen basket SMA dengan permainan yang solid.",
        year: "2023",
        level: "Provinsi",
        rank: "Juara 1",
        category: "Olahraga",
        categories: ["Basket", "Olahraga", "Tim"],
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "12 Oktober 2023",
        location: "GOR Pajajaran, Bogor",
        organizer: "PERBASI Jawa Barat",
        participants: "32 tim SMA se-Jawa Barat",
        coach: "Coach Maria Selviana, S.Pd",
        student: "Tim Basket Putri Taruna",
        class: "X, XI, XII (Ekstrakurikuler)",
        detailDescription:
            "Tim basket putri SMA Taruna Nusantara menunjukkan permainan yang luar biasa sepanjang turnamen. Dengan strategi fast break dan defensive yang solid, tim berhasil mengalahkan semua lawan tanpa kekalahan. Final yang dramatis melawan SMAN 1 Bandung dimenangkan dengan skor 78-75.",
        achievements: [
            "Undefeated Champion (7 menang 0 kalah)",
            "Top Scorer Tournament (Anisa Rahma)",
            "Best Team Defense Award",
        ],
    },
];

const AchievementPage = () => {
    const [filteredAchievements, setFilteredAchievements] = useState([]);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const achievementsData = useMemo(() => ACHIEVEMENTS_DATA, []);

    useEffect(() => {
        setFilteredAchievements(achievementsData);
    }, [achievementsData]);

    const handleFilterChange = useCallback(
        (filters) => {
            let filtered = [...achievementsData];

            if (filters.search) {
                filtered = filtered.filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .includes(filters.search.toLowerCase()) ||
                        item.description
                            .toLowerCase()
                            .includes(filters.search.toLowerCase())
                );
            }

            if (filters.categories.length > 0) {
                filtered = filtered.filter((item) =>
                    filters.categories.includes(item.category)
                );
            }

            if (filters.sort) {
                switch (filters.sort) {
                    case "newest":
                        filtered.sort(
                            (a, b) => parseInt(b.year) - parseInt(a.year)
                        );
                        break;
                    case "oldest":
                        filtered.sort(
                            (a, b) => parseInt(a.year) - parseInt(b.year)
                        );
                        break;
                    case "title_asc":
                        filtered.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case "title_desc":
                        filtered.sort((a, b) => b.title.localeCompare(a.title));
                        break;
                }
            }

            setFilteredAchievements(filtered);
        },
        [achievementsData]
    );

    const handleViewDetail = useCallback((achievement) => {
        setSelectedAchievement(achievement);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedAchievement(null);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-8 space-y-8">
                <div className="text-center space-y-4">
                    <Badge
                        text="Prestasi Akademik & Non-Akademik"
                        variant="sky"
                    />
                    <Title
                        text="Prestasi Sekolah"
                        highlight="Prestasi"
                        size="3xl"
                        className="lg:text-5xl"
                        align="center"
                    />
                    <Description
                        size="lg"
                        className="max-w-2xl mx-auto"
                        align="center"
                        color="gray-600"
                    >
                        Koleksi prestasi yang telah diraih siswa-siswi SMA
                        Taruna Nusantara di berbagai bidang kompetisi.
                    </Description>
                </div>

                <AchievementFilters onFilterChange={handleFilterChange} />

                <AchievementGrid
                    achievements={filteredAchievements}
                    onViewDetail={handleViewDetail}
                />
            </div>

            <AchievementDetail
                achievement={selectedAchievement}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

AchievementPage.layout = (page) => <LandingLayouts children={page} />;

export default AchievementPage;
