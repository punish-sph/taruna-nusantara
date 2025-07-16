import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";
import TitleSection from "@/Components/atoms/Title";
import DescriptionSection from "@/Components/atoms/Description";
import Badge from "@/Components/atoms/Badge";

export default function NewsCard({ title, date, excerpt, category, image }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge text={category} variant="sky"/>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
          <CalendarDaysIcon className="w-4 h-4" />
          <span>{date}</span>
        </div>

        <TitleSection
          text={title}
          size="md"
          className="mb-3 group-hover:text-sky-600 transition-colors"
        />

        <DescriptionSection className="mb-4 line-clamp-2 text-gray-600">
          {excerpt}
        </DescriptionSection>

        <Button variant="ghost" theme="dark" animation="slide">
          Baca Selengkapnya
        </Button>
      </div>
    </article>
  );
}
