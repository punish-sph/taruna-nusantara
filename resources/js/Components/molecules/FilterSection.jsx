import React from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

// Import atoms
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Description from "../atoms/Description";
import Title from "../atoms/Title";
import Input from "../atoms/Input";

export default function FilterSection({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedLevel,
    setSelectedLevel,
    selectedYear,
    setSelectedYear,
    filteredCount,
    totalCount,
    categories = [],
    levels = [],
    years = [],
    onResetFilter
}) {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    return (
        <motion.section 
            className="py-16 bg-gray-50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <div className="container mx-auto px-6">
                <Card className="p-8">
                    {/* Header dengan Search */}
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <FunnelIcon className="w-6 h-6 text-sky-600" />
                            <Title text="Filter Prestasi" size="lg" />
                        </div>
                        <div className="flex-1 max-w-md w-full lg:w-auto">
                            <div className="relative">
                                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Cari prestasi..."
                                    className="pl-10 w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Filter Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Category Filter */}
                        <div>
                            <Title text="Kategori" size="sm" className="mb-3" />
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "primary" : "outline"}
                                        theme="dark"
                                        size="sm"
                                        onClick={() => setSelectedCategory(category)}
                                        className="text-xs"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Level Filter */}
                        <div>
                            <Title text="Tingkat" size="sm" className="mb-3" />
                            <div className="flex flex-wrap gap-2">
                                {levels.map((level) => (
                                    <Button
                                        key={level}
                                        variant={selectedLevel === level ? "primary" : "outline"}
                                        theme="dark"
                                        size="sm"
                                        onClick={() => setSelectedLevel(level)}
                                        className="text-xs"
                                    >
                                        {level}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Year Filter */}
                        <div>
                            <Title text="Tahun" size="sm" className="mb-3" />
                            <div className="flex flex-wrap gap-2">
                                {years.map((year) => (
                                    <Button
                                        key={year}
                                        variant={selectedYear === year ? "primary" : "outline"}
                                        theme="dark"
                                        size="sm"
                                        onClick={() => setSelectedYear(year)}
                                        className="text-xs"
                                    >
                                        {year}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Info and Reset */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-gray-200">
                        <Description size="sm" color="gray-600">
                            Menampilkan {filteredCount} prestasi dari {totalCount} total prestasi
                        </Description>
                        
                        {(searchTerm || selectedCategory !== "Semua" || selectedLevel !== "Semua" || selectedYear !== "Semua") && (
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={onResetFilter}
                                className="text-xs"
                            >
                                Reset Filter
                            </Button>
                        )}
                    </div>
                </Card>
            </div>
        </motion.section>
    );
}