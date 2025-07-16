import React from "react";
import clsx from "clsx";

export default function Title({
  text = "",
  highlight = "",
  size = "base",      // mobile
  mdSize = "",        // md: (optional)
  align = "left",
  className = "",
}) {
  const textSizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
    "4xl": "text-5xl",
    "5xl": "text-6xl",
    "6xl": "text-7xl",
  };

  const parts = highlight
    ? text.split(new RegExp(`(${highlight})`, "gi"))
    : [text];

  return (
    <div
      className={clsx(
        "font-bold text-gray-800",
        textSizes[size],                  // mobile
        mdSize && `md:${textSizes[mdSize]}`, // desktop
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="text-sky-500 dark:text-sky-400">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </div>
  );
}
