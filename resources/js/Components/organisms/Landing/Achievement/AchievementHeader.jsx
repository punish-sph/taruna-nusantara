import React from "react";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

const AchievementHeader = () => {
    return (
        <div className="text-center space-y-4">
            <Badge text="Prestasi Akademik & Non-Akademik" variant="sky" />
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
                Koleksi prestasi yang telah diraih siswa-siswi SMA Taruna Nusantara 
                di berbagai bidang kompetisi.
            </Description>
        </div>
    );
};

export default AchievementHeader;