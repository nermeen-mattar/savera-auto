import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Pet } from '../../types/pet';
import { Dropdown } from '../dropdown';
import MultiSelect from '../multi-select/MultiSelect';
import SearchInput from '../search-input/SearchInput';

interface FilterProps {
    items: Pet[];
    onFilterChange: (filteredPets: Pet[]) => void;
}

const FilterContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.section`
    max-width: 500px;
`;

const SelectContainer = styled.section`
    display: flex;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.medium};
`;

const Filter: React.FC<FilterProps> = ({ items, onFilterChange }) => {
    const { t } = useTranslation();
    const [filters, setFilters] = useState({
        searchQuery: '',
        selectedTypes: [] as string[],
        selectedCategory: '',
    });

    const itemNames = items.map((item) => item.name);

    const handleSearchChange = useCallback((query: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, searchQuery: query }));
    }, []);

    const handleTypeChange = useCallback((types: string[]) => {
        setFilters((prevFilters) => ({ ...prevFilters, selectedTypes: types }));
    }, []);

    const handleCategoryChange = useCallback((category: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            selectedCategory: category,
        }));
    }, []);

    const applyFilters = useCallback(() => {
        const filteredPets = items.filter(
            (pet) =>
                (filters.searchQuery === '' ||
                    pet.name
                        .toLowerCase()
                        .includes(filters.searchQuery.toLowerCase())) &&
                (filters.selectedTypes.length === 0 ||
                    filters.selectedTypes.includes(pet.species)) &&
                (filters.selectedCategory === '' ||
                    pet.species === filters.selectedCategory),
        );
        onFilterChange(filteredPets);
    }, [filters, items, onFilterChange]);

    useEffect(() => {
        applyFilters();
    }, [filters]);

    return (
        <FilterContainer>
            <InputContainer>
                <SearchInput
                    placeholderLabel={t('search-pets')}
                    searchItems={itemNames}
                    onValueChange={handleSearchChange}
                />
            </InputContainer>
            <SelectContainer>
                <MultiSelect
                    placeholderLabel={t('type')}
                    onSelect={handleTypeChange}
                    options={['Dog', 'Cat']}
                />

                <Dropdown
                    value={filters.selectedCategory}
                    onChange={handleCategoryChange}
                    options={['All pets', 'Location Specific', 'Age Specific']}
                />
            </SelectContainer>
        </FilterContainer>
    );
};

export default Filter;
