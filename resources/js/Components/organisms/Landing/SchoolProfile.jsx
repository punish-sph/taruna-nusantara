import React from "react";
import { motion } from "framer-motion";
import {
    MapPinIcon,
    PhoneIcon,
    LightBulbIcon,
    GlobeAltIcon,
    BookOpenIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import TitleSection from "@/Components/atoms/Title";
import DescriptionSection from "@/Components/atoms/Description";
import BadgeLabel from "@/Components/atoms/Badge";
import Card from "@/Components/atoms/Card";

import InfoItem from "@/Components/atoms/InfoItem";
import FeatureList from "@/Components/molecules/FeatureList";
import SchoolImageCard from "@/Components/molecules/SchoolImageCard";

const SchoolProfileSection = () => {
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

    return (
        <motion.section
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <Card>
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        variants={fadeInLeft}
                        className="relative space-y-6"
                    >
                        <div className="space-y-3">
                            <BadgeLabel
                                text="Tentang Kami"
                                variant="sky"
                                size="md"
                            />
                            <TitleSection
                                text="Profil Sekolah"
                                highlight="Sekolah"
                                size="3xl"
                                className="lg:text-5xl"
                            />
                        </div>

                        <div className="space-y-4 text-gray-600">
                            <DescriptionSection>
                                SMA Taruna Nusantara adalah sekolah menengah
                                atas yang berkomitmen untuk membentuk generasi
                                muda yang berintegritas, berkarakter, dan siap
                                menghadapi tantangan masa depan.
                            </DescriptionSection>
                            <DescriptionSection>
                                Dengan kurikulum komprehensif dan fasilitas
                                modern, kami memberikan pendidikan terbaik yang
                                menggabungkan akademik dan pengembangan
                                karakter.
                            </DescriptionSection>
                        </div>

                        <FeatureList features={features} />
                    </motion.div>

                    <motion.div variants={fadeInRight} className="relative">
                        <SchoolImageCard
                            imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            title="Visi Sekolah"
                            desc="Menjadi sekolah unggulan yang menghasilkan lulusan berintegritas tinggi dan berdaya saing global"
                        />

                        <div className="flex flex-wrap gap-4 mt-6">
                            <InfoItem
                                icon={MapPinIcon}
                                text="Jl. Pendidikan No. 123, Jakarta Selatan"
                            />
                            <InfoItem icon={PhoneIcon} text="(021) 1234-5678" />
                        </div>
                    </motion.div>
                </div>
            </Card>
        </motion.section>
    );
};

export default SchoolProfileSection;
