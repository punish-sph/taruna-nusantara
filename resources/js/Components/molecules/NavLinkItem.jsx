import React from "react";

export default function NavLinkItem({ name, url, onClick }) {
    return (
        <a
            href={url}
            className="text-xl font-medium hover:underline block"
            onClick={onClick}
        >
            {name}
        </a>
    );
}
