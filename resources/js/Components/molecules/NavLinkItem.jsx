import React, { useState, useRef, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavLinkItem({ 
    name, 
    url, 
    icon, 
    onClick, 
    className = "", 
    activeClass = "", 
    inactiveClass = "",
    children = null, 
    dropdownClass = "",
    isDropdown = false,
    isMobile = false
}) {
    const { url: currentUrl } = usePage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const isActive = currentUrl === url || (children && children.some(child => currentUrl === child.url));
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (!isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isMobile]);

    const handleToggleDropdown = (e) => {
        if (isDropdown && children && children.length > 0) {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
        }
        if (onClick) {
            onClick(e);
        }
    };

    if (!isDropdown || !children || children.length === 0) {
        return (
            <Link
                href={url}
                onClick={onClick}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${className} ${isActive ? activeClass : inactiveClass}`}
            >
                {icon && <span className="w-5 h-5">{icon}</span>}
                <span>{name}</span>
            </Link>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={handleToggleDropdown}
                className={`flex items-center justify-between w-full gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${className} ${isActive ? activeClass : inactiveClass}`}
            >
                <div className="flex items-center gap-2">
                    {icon && <span className="w-5 h-5">{icon}</span>}
                    <span>{name}</span>
                </div>
                <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
            </button>

            {!isMobile && (
                <div
                    className={`absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 origin-top ${
                        isDropdownOpen 
                            ? 'opacity-100 scale-100 visible' 
                            : 'opacity-0 scale-95 invisible'
                    } ${dropdownClass}`}
                >
                    <div className="py-1">
                        {children.map((child) => {
                            const isChildActive = currentUrl === child.url;
                            return (
                                <Link
                                    key={child.id || child.url}
                                    href={child.url}
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        if (child.onClick) child.onClick();
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 ${
                                        isChildActive 
                                            ? 'bg-blue-50 text-blue-600 font-medium' 
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {child.icon && <span className="w-4 h-4">{child.icon}</span>}
                                    <span>{child.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            {isMobile && isDropdownOpen && (
                <div className={`mt-1 ml-4 space-y-1 ${dropdownClass}`}>
                    {children.map((child) => {
                        const isChildActive = currentUrl === child.url;
                        return (
                            <Link
                                key={child.id || child.url}
                                href={child.url}
                                onClick={() => {
                                    setIsDropdownOpen(false);
                                    if (child.onClick) child.onClick();
                                }}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                                    isChildActive 
                                        ? 'bg-sky-100 text-sky-600 font-medium' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {child.icon && <span className="w-4 h-4">{child.icon}</span>}
                                <span>{child.name}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}