import React from "react";
import Title from "@/Components/atoms/Title";
import Description from "@/Components/atoms/Description";

export default function ImageCard({ imageUrl, desc, title }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <div className="aspect-video rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt="SMA Taruna Nusantara"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-white">
          <Title 
            text={title} 
            size="sm" 
            className="text-white mb-2 lg:text-xl" 
          />
          <Description 
            size="xs" 
            color="sky-200"
            className="lg:text-base"
          >
            {desc}
          </Description>
        </div>
      </div>
    </div>
  );
}