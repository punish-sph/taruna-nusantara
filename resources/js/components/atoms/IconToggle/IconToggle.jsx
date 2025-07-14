import React from "react";
import "remixicon/fonts/remixicon.css";

export default function IconToggle({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
        >
            {isOpen ? (
                <i className="ri-close-line"></i>
            ) : (
                <i className="ri-menu-line"></i>
            )}
        </button>
    );
}
