import React from "react";

export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-sky-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
