import React from "react";
import Filter from "@/Components/molecules/FilterSection";

const CATEGORY_OPTIONS = [
    { label: "Pendaftaran", value: "pendaftaran" },
    { label: "Prestasi", value: "prestasi" },
    { label: "Kegiatan", value: "kegiatan" },
    { label: "Pengumuman", value: "pengumuman" },
    { label: "Akademik", value: "akademik" },
];

const SORT_OPTIONS = [
    { label: "Terbaru", value: "newest" },
    { label: "Terlama", value: "oldest" },
    { label: "A-Z", value: "title_asc" },
    { label: "Z-A", value: "title_desc" },
];

const NewsFilters = React.memo(({ onFilterChange }) => {
    return (
        <Filter
            searchPlaceholder="Cari berita atau kategori..."
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
});

NewsFilters.displayName = 'NewsFilters';

export default NewsFilters;