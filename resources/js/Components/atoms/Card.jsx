import React from "react";
import clsx from "clsx";

export default function Card({ children, className = "", padding = "p-8", border = true }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-3xl shadow-lg overflow-hidden",
        padding,
        border ? "border border-gray-100" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
