import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import BadgeLabel from "@/Components/atoms/Badge";
import TitleSection from "@/Components/atoms/Title";
import Button from "@/Components/atoms/Button";
import NewsCard from "@/Components/molecules/NewsCard";

const NewsSection = () => {
  // Data dummy sesuai dengan model Laravel
  const kategoriBeritas = [
    { id: 1, name: "Pendaftaran", is_active: true },
    { id: 2, name: "Prestasi", is_active: true },
    { id: 3, name: "Kegiatan", is_active: true },
    { id: 4, name: "Pengumuman", is_active: true },
    { id: 5, name: "Akademik", is_active: true }
  ];

  const users = [
    { id: 1, name: "Admin Sekolah", email: "admin@tarunanusantara.sch.id", role: "admin" },
    { id: 2, name: "Kepala Sekolah", email: "kepsek@tarunanusantara.sch.id", role: "kepala_sekolah" },
    { id: 3, name: "Guru MIPA", email: "guru.mipa@tarunanusantara.sch.id", role: "guru" }
  ];

  // Data berita sesuai dengan model Berita Laravel
  const newsData = [
    {
      id: 1,
      title: "Penerimaan Siswa Baru Tahun Ajaran 2024/2025 Telah Dibuka",
      slug: "penerimaan-siswa-baru-2024-2025",
      content: "Pendaftaran siswa baru tahun ajaran 2024/2025 telah resmi dibuka dengan berbagai program unggulan. Calon siswa dapat mendaftar melalui sistem online yang telah disediakan dengan syarat dan ketentuan yang berlaku.",
      kategori_id: 1,
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 1,
      created_at: "2024-07-15T08:00:00Z",
      updated_at: "2024-07-15T08:00:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 1),
      user: users.find(u => u.id === 1)
    },
    {
      id: 2,
      title: "Siswa SMA Taruna Nusantara Raih Juara 1 Olimpiade Matematika Nasional",
      slug: "juara-1-olimpiade-matematika-nasional-2024",
      content: "Tim matematika SMA Taruna Nusantara berhasil meraih juara 1 dalam olimpiade matematika tingkat nasional. Prestasi ini merupakan hasil kerja keras dan dedikasi dari siswa dan guru pembimbing.",
      kategori_id: 2,
      thumbnail: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 3,
      created_at: "2024-07-10T10:30:00Z",
      updated_at: "2024-07-10T10:30:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 2),
      user: users.find(u => u.id === 3)
    },
    {
      id: 3,
      title: "Workshop Teknologi AI dan Machine Learning untuk Siswa Kelas XI",
      slug: "workshop-teknologi-ai-machine-learning-kelas-xi",
      content: "Sekolah mengadakan workshop teknologi AI dan Machine Learning untuk meningkatkan kemampuan siswa dalam bidang teknologi modern. Workshop ini dihadiri oleh seluruh siswa kelas XI dengan narasumber dari industri teknologi.",
      kategori_id: 3,
      thumbnail: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 2,
      created_at: "2024-07-08T14:00:00Z",
      updated_at: "2024-07-08T14:00:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 3),
      user: users.find(u => u.id === 2)
    },
    {
      id: 4,
      title: "Pengumuman Libur Semester dan Kegiatan Remedial",
      slug: "pengumuman-libur-semester-kegiatan-remedial",
      content: "Pengumuman resmi mengenai jadwal libur semester genap dan kegiatan remedial untuk siswa yang memerlukan perbaikan nilai. Kegiatan remedial akan dilaksanakan sebelum libur semester dimulai.",
      kategori_id: 4,
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 1,
      created_at: "2024-07-05T09:15:00Z",
      updated_at: "2024-07-05T09:15:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 4),
      user: users.find(u => u.id === 1)
    },
    {
      id: 5,
      title: "Program Pertukaran Pelajar dengan Sekolah Internasional",
      slug: "program-pertukaran-pelajar-sekolah-internasional",
      content: "SMA Taruna Nusantara membuka kesempatan program pertukaran pelajar dengan sekolah mitra internasional. Program ini bertujuan untuk memperluas wawasan dan kemampuan berbahasa asing siswa.",
      kategori_id: 5,
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 2,
      created_at: "2024-07-03T11:45:00Z",
      updated_at: "2024-07-03T11:45:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 5),
      user: users.find(u => u.id === 2)
    },
    {
      id: 6,
      title: "Festival Sains dan Teknologi Tingkat Sekolah Menengah",
      slug: "festival-sains-teknologi-tingkat-sekolah-menengah",
      content: "SMA Taruna Nusantara akan menjadi tuan rumah Festival Sains dan Teknologi tingkat sekolah menengah se-Jawa Barat. Event ini akan menampilkan berbagai inovasi dan penelitian siswa.",
      kategori_id: 3,
      thumbnail: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      is_active: true,
      user_id: 3,
      created_at: "2024-07-01T16:20:00Z",
      updated_at: "2024-07-01T16:20:00Z",
      // Relations
      kategori: kategoriBeritas.find(k => k.id === 3),
      user: users.find(u => u.id === 3)
    }
  ];

  // Function untuk format tanggal
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Function untuk membuat excerpt dari content
  const createExcerpt = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substr(0, maxLength) + '...';
  };

  // Ambil 3 berita terbaru yang aktif
  const displayedNews = newsData
    .filter(news => news.is_active)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

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

  const handleNewsClick = (news) => {
    console.log(`Navigating to news: ${news.slug}`);
    // Di implementasi nyata, ini akan navigate ke halaman detail berita
    // window.location.href = `/berita/${news.slug}`;
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
          <BadgeLabel text="Informasi Terkini" variant="sky" />
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
          onClick={() => console.log('Navigate to all news')}
        >
          Lihat Semua Berita
        </Button>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {displayedNews.map((news) => (
          <motion.div key={news.id} variants={scaleIn} whileHover={{ y: -10 }}>
            <NewsCard 
              id={news.id}
              title={news.title}
              slug={news.slug}
              date={formatDate(news.created_at)}
              excerpt={createExcerpt(news.content)}
              category={news.kategori.name}
              image={news.thumbnail}
              author={news.user.name}
              isActive={news.is_active}
              buttontext="Baca Selengkapnya"
              onClick={() => handleNewsClick(news)}
            />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  );
};

export default NewsSection;