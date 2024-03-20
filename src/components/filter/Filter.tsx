import React, { useState } from 'react';
import { Pet } from '../../types/pet';
import { Dropdown } from '../dropdown';
import SearchInput from '../search-input/SearchInput';

interface FilterProps {
    items: Pet[];
    onFilterChange: (filteredPets: Pet[]) => void;
}

const Filter: React.FC<FilterProps> = ({ items, onFilterChange }) => {
    const [filters, setFilters] = useState({
        searchQuery: '',
        selectedType: '',
        selectedCategory: '',
    });

    const handleSearchChange = (query: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, searchQuery: query }));
        applyFilters({ ...filters, searchQuery: query });
    };

    const handleTypeChange = (type: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, selectedType: type }));
        applyFilters({ ...filters, selectedType: type });
    };

    const handleCategoryChange = (category: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            selectedCategory: category,
        }));
        applyFilters({ ...filters, selectedCategory: category });
    };

    const applyFilters = (filters: {
        searchQuery: string;
        selectedType: string;
        selectedCategory: string;
    }) => {
        const filteredPets = items.filter(
            (pet) =>
                (filters.searchQuery === '' ||
                    pet.name
                        .toLowerCase()
                        .includes(filters.searchQuery.toLowerCase())) &&
                (filters.selectedType === '' ||
                    pet.species === filters.selectedType) &&
                (filters.selectedCategory === '' ||
                    pet.species === filters.selectedCategory),
        );
        onFilterChange(filteredPets);
    };

    return (
        <div>
            <SearchInput
                value={filters.searchQuery}
                onChange={handleSearchChange}
            />
            <Dropdown
                value={filters.selectedType}
                onChange={handleTypeChange}
                options={['Dog', 'Cat']}
            />
            <Dropdown
                value={filters.selectedCategory}
                onChange={handleCategoryChange}
                options={['All pets', 'Location Specific', 'Age Specific']}
            />
        </div>
    );
};

export default Filter;
