import { useEffect, useState } from 'react';
import { Pet } from '../types/pet';

export interface Filters {
    searchQuery: string;
    selectedTypes: string[];
    selectedCategory: string;
    sortByLatestAdded: boolean;
    isAvailableNow: boolean;
}

const usePetsFilter = (initialPets: Pet[]) => {
    const [filters, setFilters] = useState<Filters>({
        searchQuery: '',
        selectedTypes: [],
        selectedCategory: '',
        sortByLatestAdded: false,
        isAvailableNow: false,
    });

    const [filteredPets, setFilteredPets] = useState<Pet[]>(initialPets);

    useEffect(() => {
        let result = initialPets.filter(
            (pet) =>
                (filters.searchQuery === '' ||
                    pet.name
                        .toLowerCase()
                        .includes(filters.searchQuery.toLowerCase())) &&
                (filters.selectedTypes.length === 0 ||
                    filters.selectedTypes.includes(pet.species)) &&
                (filters.selectedCategory === '' ||
                    pet.species === filters.selectedCategory) &&
                (!filters.isAvailableNow || pet.available),
        );

        if (filters.sortByLatestAdded) {
            result = result.sort(
                (a, b) =>
                    new Date(b.dateAdded).getTime() -
                    new Date(a.dateAdded).getTime(),
            );
        }

        setFilteredPets(result);
    }, [filters, initialPets]);

    return {
        filteredPets,
        setFilters,
    };
};

export default usePetsFilter;
