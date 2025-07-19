import React from "react";
import { 
    CalendarDaysIcon,
    UserIcon,
    TagIcon,
    ClockIcon
} from "@heroicons/react/24/outline";
import Modal from "@/Components/molecules/Modal";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

const NewsDetail = React.memo(({ news, isOpen, onClose }) => {
    if (!news) return null;

    const getBadgeVariant = (category) => {
        switch (category?.toLowerCase()) {
            case 'pendaftaran':
                return 'emerald';
            case 'prestasi':
                return 'gold';
            case 'kegiatan':
                return 'sky';
            case 'pengumuman':
                return 'danger';
            case 'akademik':
                return 'light';
            default:
                return 'sky';
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Detail Berita"
            size="xl"
        >
            <div className="space-y-6">
                <div className="relative">
                    <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <Badge 
                            text={news.category} 
                            variant={getBadgeVariant(news.category)}
                        />
                        {!news.isActive && (
                            <Badge 
                                text="Draft" 
                                variant="black"
                            />
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <Title
                        text={news.title}
                        size="xl"
                        className="text-gray-800"
                    />

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <CalendarDaysIcon className="w-4 h-4" />
                            <span>{news.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <UserIcon className="w-4 h-4" />
                            <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <TagIcon className="w-4 h-4" />
                            <span>{news.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <ClockIcon className="w-4 h-4" />
                            <span>Waktu baca: ~3 menit</span>
                        </div>
                    </div>

                    <Description className="text-gray-700 leading-relaxed">
                        {news.content}
                    </Description>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <UserIcon className="w-5 h-5 text-sky-600" />
                        Informasi Penulis
                    </h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <span className="font-medium text-gray-700">Nama: </span>
                            <span className="text-gray-600">{news.author}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700">Kategori: </span>
                            <span className="text-gray-600">{news.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
});

NewsDetail.displayName = 'NewsDetail';

export default NewsDetail;