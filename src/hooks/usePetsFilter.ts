import { useEffect, useState } from 'react';
import { Pet } from '../types/pet';

export interface Filters {
    searchQuery: string;
    selectedTypes: string[];
    selectedCategory: string;
}

const usePetsFilter = (initialPets: Pet[]) => {
    const [filters, setFilters] = useState<Filters>({
        searchQuery: '',
        selectedTypes: [],
        selectedCategory: '',
    });

    const [filteredPets, setFilteredPets] = useState<Pet[]>(initialPets);

    useEffect(() => {
        const result = initialPets.filter(
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
        setFilteredPets(result);
    }, [filters, initialPets]);

    return {
        filteredPets,
        setFilters,
    };
};

export default usePetsFilter;
