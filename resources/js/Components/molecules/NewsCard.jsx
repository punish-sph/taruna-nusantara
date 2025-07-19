import React from "react";
import { CalendarDaysIcon, UserIcon, EyeIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";
import TitleSection from "@/Components/atoms/Title";
import DescriptionSection from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

export default function NewsCard({ 
  id,
  title, 
  slug,
  date, 
  excerpt, 
  category, 
  image, 
  author,
  isActive = true,
  buttontext = "Baca Selengkapnya",
  onClick
}) {
  
  // Function untuk mendapatkan variant badge berdasarkan kategori
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

  // Function untuk handle click
  const handleClick = () => {
    if (onClick) {
      onClick({ id, slug, title });
    }
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badge Category */}
        <div className="absolute top-4 right-4">
          <Badge 
            text={category} 
            variant={getBadgeVariant(category)}
          />
        </div>

        {/* Status Badge jika tidak aktif */}
        {!isActive && (
          <div className="absolute top-4 left-4">
            <Badge 
              text="Draft" 
              variant="black"
            />
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>
          
          {author && (
            <div className="flex items-center gap-1">
              <UserIcon className="w-4 h-4" />
              <span className="text-xs">{author}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <TitleSection
          text={title}
          size="md"
          className="mb-3 group-hover:text-sky-600 transition-colors line-clamp-2"
        />

        {/* Excerpt */}
        <DescriptionSection className="mb-4 line-clamp-3 text-gray-600 leading-relaxed">
          {excerpt}
        </DescriptionSection>

        {/* Slug info for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-3 p-2 bg-gray-50 rounded text-xs text-gray-400 font-mono">
            Slug: {slug}
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            theme="dark" 
            animation="pulse"
            onClick={handleClick}
            className="flex-1"
          >
            {buttontext}
          </Button>
          
          {/* Additional info */}
          <div className="ml-3 text-xs text-gray-400">
            ID: {id}
          </div>
        </div>

        {/* Bottom border with category color */}
        <div className={`mt-4 h-1 rounded-full ${
          category?.toLowerCase() === 'pendaftaran' ? 'bg-emerald-500' :
          category?.toLowerCase() === 'prestasi' ? 'bg-amber-500' :
          category?.toLowerCase() === 'kegiatan' ? 'bg-sky-500' :
          category?.toLowerCase() === 'pengumuman' ? 'bg-red-500' :
          category?.toLowerCase() === 'akademik' ? 'bg-gray-500' :
          'bg-sky-500'
        }`}></div>
      </div>
    </article>
  );
}