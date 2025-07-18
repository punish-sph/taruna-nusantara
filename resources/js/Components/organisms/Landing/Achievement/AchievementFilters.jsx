import React from "react";
import Filter from "@/Components/molecules/FilterSection";

const CATEGORY_OPTIONS = [
    { label: "Sains & MIPA", value: "Sains" },
    { label: "Teknologi", value: "Teknologi" },
    { label: "Bahasa", value: "Bahasa" },
    { label: "Seni & Budaya", value: "Seni" },
    { label: "Olahraga", value: "Olahraga" },
];

const SORT_OPTIONS = [
    { label: "Terbaru", value: "newest" },
    { label: "Terlama", value: "oldest" },
    { label: "A-Z", value: "title_asc" },
    { label: "Z-A", value: "title_desc" },
];

const AchievementFilters = ({ onFilterChange }) => {
    return (
        <Filter
            searchPlaceholder="Cari prestasi atau kategori..."
            categories={CATEGORY_OPTIONS}
            sortOptions={SORT_OPTIONS}
            onFilterChange={onFilterChange}
            initialFilters={{
                search: "",
                categories: [],
                sort: "newest"
            }}
        />
    );
};

export default AchievementFilters;