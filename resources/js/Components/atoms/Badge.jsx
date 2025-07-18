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
        black: "from-neutral-800/80 to-black/80 text-white", 
        light: "from-zinc-100/80 to-zinc-300/80 text-zinc-800", 
        sky: "from-sky-500/80 to-sky-800/80 text-white",
        danger: "from-red-500/80 to-red-800/80 text-white", 
        gold: "from-amber-300/80 to-amber-700/80 text-white", 
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
