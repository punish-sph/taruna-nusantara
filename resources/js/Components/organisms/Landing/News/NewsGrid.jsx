import React from "react";
import { motion } from "framer-motion";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import NewsCard from "@/Components/molecules/NewsCard";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

const NewsGrid = React.memo(({ news, onViewDetail }) => {
    if (news.length === 0) {
        return (
            <div className="text-center py-16">
                <NewspaperIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <Title 
                    text="Tidak ada berita ditemukan" 
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
            {news.map((newsItem, index) => (
                <motion.div 
                    key={newsItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                    }}
                >
                    <NewsCard
                        id={newsItem.id}
                        title={newsItem.title}
                        slug={newsItem.slug}
                        date={newsItem.date}
                        excerpt={newsItem.excerpt}
                        category={newsItem.category}
                        image={newsItem.image}
                        author={newsItem.author}
                        isActive={newsItem.isActive}
                        buttontext="Lihat Detail"
                        onClick={() => onViewDetail && onViewDetail(newsItem)}
                    />
                </motion.div>
            ))}
        </div>
    );
});

NewsGrid.displayName = 'NewsGrid';

export default NewsGrid;