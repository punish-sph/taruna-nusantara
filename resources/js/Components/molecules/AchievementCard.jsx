import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, StarIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";
import TitleSection from "@/Components/atoms/Title";
import DescriptionSection from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

export default function AchievementCard({ 
    achievement,
    buttonText = "Lihat Detail",
    onButtonClick,
    index = 0,
    className = ""
}) {
    
    const getBadgeVariant = (level) => {
        switch (level?.toLowerCase()) {
            case 'internasional':
                return 'gold';
            case 'nasional':
                return 'danger';
            case 'provinsi':
                return 'emerald';
            case 'kota':
            case 'kabupaten':
                return 'info';
            default:
                return 'sky';
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.article 
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group ${className}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute top-4 right-4">
                    <Badge 
                        text={achievement.level} 
                        variant={getBadgeVariant(achievement.level)}
                    />
                </div>

                <div className="absolute top-4 left-4">
                    <Badge 
                        text={achievement.year} 
                        variant="sky"
                    />
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-yellow-500">
                        <TrophyIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>Tahun {achievement.year}</span>
                    {achievement.rank && (
                        <>
                            <span>•</span>
                            <span className="font-medium text-sky-600">{achievement.rank}</span>
                        </>
                    )}
                </div>
                
                <TitleSection
                    text={achievement.title}
                    size="md"
                    className="mb-3 group-hover:text-sky-600 transition-colors"
                />
                
                <DescriptionSection className="mb-4 line-clamp-3 text-gray-600">
                    {achievement.description}
                </DescriptionSection>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow-500">
                        <StarIcon className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                            {achievement.starDesc || "Prestasi Terbaik"}
                        </span>
                    </div>
                    
                    {achievement.level && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            Tingkat {achievement.level}
                        </span>
                    )}
                </div>

                {achievement.categories && achievement.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {achievement.categories.slice(0, 3).map((category, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-sky-50 text-sky-600 rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                        {achievement.categories.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded-full">
                                +{achievement.categories.length - 3} lainnya
                            </span>
                        )}
                    </div>
                )}
                
                {/* Button */}
                <Button 
                    variant="ghost" 
                    theme="dark" 
                    animation="pulse"
                    onClick={() => onButtonClick && onButtonClick(achievement)}
                    className="w-full"
                >
                    {buttonText}
                </Button>
            </div>
        </motion.article>
    );
}