import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NavLinkItem({ name, url, icon, onClick, className = "", activeClass = "", inactiveClass = "" }) {
    const { url: currentUrl } = usePage();
    const isActive = currentUrl === url;

    return (
        <Link
            href={url}
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${className} ${isActive ? activeClass : inactiveClass}`}
        >
            {icon && <span className="w-5 h-5">{icon}</span>}
            <span>{name}</span>
        </Link>
    );
}
