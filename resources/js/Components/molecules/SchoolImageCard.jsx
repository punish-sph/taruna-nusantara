import React from "react";

export default function SchoolImageCard({ imageUrl, desc, title }) {
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
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sky-200">{desc}</p>
        </div>
      </div>
    </div>
  );
}
