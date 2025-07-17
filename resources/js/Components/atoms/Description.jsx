import React from "react";
import clsx from "clsx";

export default function Description({
  children,
  size = "",
  mdSize = "",
  align = "",
  color = "zinc-600",
  className = "",
}) {
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <p
      className={clsx(
        "leading-relaxed",
        sizeStyles[size],
        mdSize && `md:${sizeStyles[mdSize]}`,
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        `text-${color}`, // safe, with fallback
        className
      )}
    >
      {children}
    </p>
  );
}
