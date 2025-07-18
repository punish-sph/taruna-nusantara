import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import AchievementCard from "@/Components/molecules/AchievementCard";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

const AchievementGrid = ({ achievements, onViewDetail }) => {
    if (achievements.length === 0) {
        return (
            <div className="text-center py-16">
                <TrophyIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <Title 
                    text="Tidak ada prestasi ditemukan" 
                    size="lg" 
                    align="center" 
                    className="text-gray-500 mb-2" 
                />
                <Description align="center" color="gray-400">
                    Coba ubah filter atau kata kunci pencarian Anda
                </Description>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
                <div 
                    key={achievement.id} 
                    className="opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <AchievementCard
                        achievement={achievement}
                        index={index}
                        buttonText="Lihat Detail"
                        onButtonClick={onViewDetail}
                    />
                </div>
            ))}
        </div>
    );
};

export default AchievementGrid;