import { useEffect, useState } from 'react';
import { Pet } from '../types/pet';
import { Range } from '../types/range';

export interface Filters {
    searchQuery: string;
    selectedTypes: string[];
    sortByLatestAdded: boolean;
    isAvailableNow: boolean;
    ageRange: Range;
}

const usePetsFilter = (initialPets: Pet[]) => {
    const [filters, setFilters] = useState<Filters>({
        searchQuery: '',
        selectedTypes: [],
        sortByLatestAdded: false,
        isAvailableNow: false,
        ageRange: {
            min: 0,
            max: 100,
        },
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
                (!filters.isAvailableNow || pet.available),
        );

        if (filters.ageRange.min && filters.ageRange.max) {
            result = result.filter(
                (pet) =>
                    pet.age >= filters.ageRange.min &&
                    pet.age <= filters.ageRange.max,
            );
        }

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
