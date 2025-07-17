import React, { useState } from "react";
import { motion } from "framer-motion";
import { UsersIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";
import Badge from "@/Components/atoms/Badge";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import { Link } from "@inertiajs/react";

const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

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

    return (
        <section className="relative h-screen max-h-[580px] min-h-[450px] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1986&q=80"
                    alt="SMA Taruna Nusantara"
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                        imageLoaded
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-110"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-sky-900 transition-opacity duration-700 ${
                        imageLoaded ? "opacity-0" : "opacity-100"
                    }`}
                ></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-start h-full text-white px-6 md:px-16">
                <div className="max-w-3xl space-y-8">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="lg:space-y-6 space-y-1"
                        >
                            <Badge
                                text="Sekolah Unggulan Nasional"
                                variant="sky"
                            />
                            <Title
                                text="SMA Taruna Nusantara"
                                highlight="Taruna"
                                className="text-white"
                                size="5xl"
                                mdSize="6xl"
                            />
                            <Description color="gray-100" size="lg" mdSize="xl">
                                Membentuk Generasi Pemimpin Berintegritas dan
                                Berkarakter untuk Masa Depan Indonesia.
                            </Description>
                        </motion.div>

                        <motion.div variants={fadeInUp}></motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                            variants={fadeInUp}
                        >
                            <Link href="/register">
                                <Button
                                    variant="primary"
                                    size="md"
                                    rounded="full"
                                    shadow="lg"
                                    animation="pulse"
                                    isFullWidth="true"
                                    className="text-lg hover:scale-[1.03] transition-transform"
                                >
                                    Registrasi Akun
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button
                                    variant="outline"
                                    theme="light"
                                    size="md"
                                    icon={UsersIcon}
                                    iconPosition="left"
                                    animation="pulse"
                                    rounded="full"
                                    shadow="lg"
                                >
                                    Login Akun
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
