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
    );
};

export default SchoolProfileSection;