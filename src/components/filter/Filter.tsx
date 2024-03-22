import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Filters } from '../../hooks/usePetsFilter';
import { useAppSelector } from '../../state/hooks';
import { RootState } from '../../state/store';
import { theme } from '../../theme';
import { Pet } from '../../types/pet';
import MultiSelect from '../inputs/multi-select/MultiSelect';
import Autocomplete from '../inputs/autocomplete/Autocomplete';
import { Dropdown } from '../inputs/dropdown/Dropdown';

interface FilterProps {
    items: Pet[];
    onFilter: (filters: Filters) => void;
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

const Filter: React.FC<FilterProps> = ({ items, onFilter }) => {
    const { t } = useTranslation();
    const petTypes = useAppSelector((state: RootState) => state.pet.types);

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

    useEffect(() => {
        onFilter(filters);
    }, [filters, onFilter]);

    return (
        <FilterContainer>
            <InputContainer>
                <Autocomplete
                    placeholderLabel={t('search-pets')}
                    searchItems={itemNames}
                    onValueChange={handleSearchChange}
                />
            </InputContainer>
            <SelectContainer>
                <MultiSelect
                    placeholderLabel={t('type')}
                    onSelect={handleTypeChange}
                    options={petTypes}
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
