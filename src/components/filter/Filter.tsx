import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Filters } from '../../hooks/usePetsFilter';
import { useAppSelector } from '../../state/hooks';
import { RootState } from '../../state/store';
import { theme } from '../../theme';
import { Pet } from '../../types/pet';
import { Range } from '../../types/range';
import Autocomplete from '../inputs/autocomplete/Autocomplete';
import Dropdown from '../inputs/dropdown/Dropdown';
import MultiSelect from '../inputs/multi-select/MultiSelect';
import Slider from '../inputs/slider/Slider';
import ToggleButton from '../inputs/toggle-button/ToggleButton';

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
    flex-wrap: wrap;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.medium};
`;

const Filter: React.FC<FilterProps> = ({ items, onFilter }) => {
    const { t } = useTranslation();
    const petTypes = useAppSelector((state: RootState) => state.pet.types);
    const minMaxAges = useAppSelector(
        (state: RootState) => state.pet.maxMinAge,
    );

    const [filters, setFilters] = useState({
        searchQuery: '',
        selectedTypes: [] as string[],
        sortByLatestAdded: false,
        isAvailableNow: false,
        ageRange: { min: 0, max: 100 },
    });

    const itemNames = useMemo(() => items.map((item) => item.name), [items]);

    const handleSearchChange = useCallback((query: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, searchQuery: query }));
    }, []);

    const handleTypeChange = useCallback((types: string[]) => {
        setFilters((prevFilters) => ({ ...prevFilters, selectedTypes: types }));
    }, []);

    const handleLatestAddedToggle = useCallback(
        (sortByLatestAdded: boolean) => {
            setFilters((prevFilters) => ({
                ...prevFilters,
                sortByLatestAdded,
            }));
        },
        [],
    );

    const handleAvailableNowToggle = useCallback((isAvailableNow: boolean) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            isAvailableNow,
        }));
    }, []);

    const handleAgeRangeChange = useCallback((ageRange: Range) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ageRange,
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
                    placeholderLabel={t('filters.type')}
                    onSelect={handleTypeChange}
                    options={petTypes}
                />
                <ToggleButton
                    onToggle={handleLatestAddedToggle}
                    placeholderLabel={t('filters.latest-added')}
                />
                <ToggleButton
                    onToggle={handleAvailableNowToggle}
                    placeholderLabel={t('category.available-now')}
                />
                <Dropdown placeholderLabel={t('filters.age-range')}>
                    <Slider {...minMaxAges} onChange={handleAgeRangeChange} />
                </Dropdown>
            </SelectContainer>
        </FilterContainer>
    );
};

export default Filter;
