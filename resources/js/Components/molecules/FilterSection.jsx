import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    MagnifyingGlassIcon,
    FunnelIcon,
    XMarkIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Button from "@/Components/atoms/Button";
import Input from "@/Components/atoms/Input";
import Badge from "@/Components/atoms/Badge";
import clsx from "clsx";

export default function Filter({
    searchPlaceholder = "Cari...",
    categories = [],
    sortOptions = [],
    onFilterChange,
    onSearchChange,
    onSortChange,
    onResetFilters,
    initialFilters = {},
    showSearch = true,
    showCategories = true,
    showSort = true,
    showActiveFilters = true,
    className = "",
}) {
    const [searchTerm, setSearchTerm] = useState(initialFilters.search || "");
    const [selectedCategories, setSelectedCategories] = useState(
        initialFilters.categories || []
    );
    const [selectedSort, setSelectedSort] = useState(initialFilters.sort || "");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

    useEffect(() => {
        const filters = {
            search: searchTerm,
            categories: selectedCategories,
            sort: selectedSort,
        };
        onFilterChange && onFilterChange(filters);
    }, [searchTerm, selectedCategories, selectedSort, onFilterChange]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchChange && onSearchChange(value);
    };

    const handleCategoryToggle = (categoryValue) => {
        const newCategories = selectedCategories.includes(categoryValue)
            ? selectedCategories.filter((cat) => cat !== categoryValue)
            : [...selectedCategories, categoryValue];

        setSelectedCategories(newCategories);
    };

    const handleSortChange = (sortValue) => {
        setSelectedSort(sortValue);
        setIsSortDropdownOpen(false);
        onSortChange && onSortChange(sortValue);
    };

    const handleResetFilters = () => {
        setSearchTerm("");
        setSelectedCategories([]);
        setSelectedSort("");
        onResetFilters && onResetFilters();
    };

    const hasActiveFilters =
        searchTerm || selectedCategories.length > 0 || selectedSort;

    const getCategoryLabel = (value) => {
        const category = categories.find((cat) => cat.value === value);
        return category ? category.label : value;
    };

    const getSortLabel = (value) => {
        const sortOption = sortOptions.find((sort) => sort.value === value);
        return sortOption ? sortOption.label : value;
    };

    return (
        <motion.div
            className={clsx(
                "bg-white rounded-xl border border-gray-200 shadow-sm",
                className
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FunnelIcon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium text-gray-800">
                            Filter
                        </span>
                        {hasActiveFilters && (
                            <Badge
                                text={`${
                                    (searchTerm ? 1 : 0) +
                                    selectedCategories.length +
                                    (selectedSort ? 1 : 0)
                                } aktif`}
                                variant="sky"
                                size="sm"
                            />
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {hasActiveFilters && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleResetFilters}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Reset
                            </Button>
                        )}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden"
                        >
                            {isFilterOpen ? (
                                <XMarkIcon className="w-4 h-4" />
                            ) : (
                                <ChevronDownIcon className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </div>

                <div
                    className={clsx(
                        "space-y-4 transition-all duration-300",
                        "md:block",
                        isFilterOpen ? "block" : "hidden md:block"
                    )}
                >
                    {showSearch && (
                        <div className="relative">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                type="text"
                                placeholder={searchPlaceholder}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="pl-10"
                            />
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-4">
                        {showCategories && categories.length > 0 && (
                            <div className="relative flex-1">
                                <button
                                    onClick={() =>
                                        setIsCategoryDropdownOpen(
                                            !isCategoryDropdownOpen
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-colors"
                                >
                                    <span className="text-sm text-gray-700">
                                        {selectedCategories.length > 0
                                            ? `${selectedCategories.length} kategori dipilih`
                                            : "Pilih Kategori"}
                                    </span>
                                    <ChevronDownIcon
                                        className={clsx(
                                            "w-4 h-4 text-gray-400 transition-transform",
                                            isCategoryDropdownOpen &&
                                                "rotate-180"
                                        )}
                                    />
                                </button>

                                {isCategoryDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                        <div className="py-1">
                                            {categories.map((category) => (
                                                <label
                                                    key={category.value}
                                                    className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedCategories.includes(
                                                            category.value
                                                        )}
                                                        onChange={() =>
                                                            handleCategoryToggle(
                                                                category.value
                                                            )
                                                        }
                                                        className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                                                    />
                                                    <span className="ml-3 text-sm text-gray-700">
                                                        {category.label}
                                                    </span>
                                                    {category.count && (
                                                        <span className="ml-auto text-xs text-gray-500">
                                                            ({category.count})
                                                        </span>
                                                    )}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {showSort && sortOptions.length > 0 && (
                            <div className="relative flex-1">
                                <button
                                    onClick={() =>
                                        setIsSortDropdownOpen(
                                            !isSortDropdownOpen
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-colors"
                                >
                                    <span className="text-sm text-gray-700">
                                        {selectedSort
                                            ? getSortLabel(selectedSort)
                                            : "Urutkan"}
                                    </span>
                                    <ChevronDownIcon
                                        className={clsx(
                                            "w-4 h-4 text-gray-400 transition-transform",
                                            isSortDropdownOpen && "rotate-180"
                                        )}
                                    />
                                </button>

                                {isSortDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() =>
                                                        handleSortChange(
                                                            option.value
                                                        )
                                                    }
                                                    className={clsx(
                                                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                                                        selectedSort ===
                                                            option.value &&
                                                            "bg-sky-50 text-sky-600 font-medium"
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {showActiveFilters && hasActiveFilters && (
                    <div className="flex flex-wrap gap-2">
                        {searchTerm && (
                            <Badge
                                text={`Pencarian: "${searchTerm}"`}
                                variant="light"
                                size="sm"
                            />
                        )}
                        {selectedCategories.map((category) => (
                            <Badge
                                key={category}
                                text={getCategoryLabel(category)}
                                variant="emerald"
                                size="sm"
                            />
                        ))}
                        {selectedSort && (
                            <Badge
                                text={`Urutan: ${getSortLabel(selectedSort)}`}
                                variant="sky"
                                size="sm"
                            />
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
