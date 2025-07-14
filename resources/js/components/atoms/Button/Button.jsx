import React from "react";
import clsx from "clsx";

export default function Button({
    children,
    variant = "primary",
    type = "button",
    size = "md",
    onClick,
    className,
    disabled = false,
    ...props
}) {
    const baseClass =
        "rounded-md transition duration-300 font-semibold ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white",
        warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
    };

    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const classes = clsx(
        baseClass,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
    );

    return (
        <button
            {...props}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    );
}
