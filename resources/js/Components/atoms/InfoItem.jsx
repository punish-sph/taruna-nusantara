import React from "react";
import clsx from "clsx";

export default function InfoItem({ icon: Icon, text, className = "" }) {
  return (
    <div className={clsx("flex items-center gap-3 bg-sky-50 rounded-xl px-4 py-3", className)}>
      <Icon className="w-5 h-5 text-sky-600" />
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}
