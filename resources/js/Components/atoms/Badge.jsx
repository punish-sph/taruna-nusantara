import React from "react";
import clsx from "clsx";

export default function Badge({
  text,
  variant = "emerald",
  size = "md",
  rounded = "full",
  className = "",
}) {
  const variantStyles = {
    emerald: "from-green-500/80 to-emerald-800/80 text-white",
    white: "from-white/80 to-gray-300/80 text-black",
    black: "bg-black/20 text-white",
    light: "bg-zinc-100 text-zinc-800",
    sky: "from-sky-500/80 to-sky-800/80 text-white",
    danger: "bg-red-100 text-red-700",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-4 py-1.5",
    lg: "text-base px-5 py-2",
  };

  return (
    <span
      className={clsx(
        "inline-block font-semibold tracking-wide transition-all bg-gradient-to-l",
        variantStyles[variant],
        sizeStyles[size],
        rounded === "full" ? "rounded-full" : "rounded-md",
        className
      )}
    >
      {text}
    </span>
  );
}
