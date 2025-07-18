import React from "react";
import { 
    CalendarDaysIcon,
    MapPinIcon,
    StarIcon,
    UserGroupIcon,
    AcademicCapIcon,
    TrophyIcon
} from "@heroicons/react/24/outline";
import Modal from "@/Components/molecules/Modal";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

const AchievementDetail = ({ achievement, isOpen, onClose }) => {
    if (!achievement) return null;

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
                return 'sky';
            default:
                return 'sky';
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Detail Prestasi"
            size="xl"
        >
            <div className="space-y-6">
                <div className="relative">
                    <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <Badge 
                            text={achievement.level} 
                            variant={getBadgeVariant(achievement.level)}
                        />
                        <Badge 
                            text={achievement.year} 
                            variant="sky"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {achievement.categories.map((category, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-sky-50 text-sky-600 rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <Title
                        text={achievement.title}
                        size="xl"
                        className="text-gray-800"
                    />

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <CalendarDaysIcon className="w-4 h-4" />
                            <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <TrophyIcon className="w-4 h-4" />
                            <span className="font-medium text-sky-600">{achievement.rank}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{achievement.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <UserGroupIcon className="w-4 h-4" />
                            <span>{achievement.participants}</span>
                        </div>
                    </div>

                    <Description className="text-gray-700 leading-relaxed">
                        {achievement.detailDescription}
                    </Description>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <AcademicCapIcon className="w-5 h-5 text-sky-600" />
                            Tim Prestasi
                        </h4>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">Siswa: </span>
                                <span className="text-gray-600">{achievement.student}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Kelas: </span>
                                <span className="text-gray-600">{achievement.class}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Pembimbing: </span>
                                <span className="text-gray-600">{achievement.coach}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <StarIcon className="w-5 h-5 text-yellow-500" />
                            Pencapaian Khusus
                        </h4>
                        <ul className="space-y-2">
                            {achievement.achievements.map((achievementItem, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <StarIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{achievementItem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Informasi Kompetisi</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                        <div><span className="font-medium">Penyelenggara:</span> {achievement.organizer}</div>
                        <div><span className="font-medium">Tingkat:</span> {achievement.level}</div>
                        <div><span className="font-medium">Peserta:</span> {achievement.participants}</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AchievementDetail;