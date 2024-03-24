import { Pet } from '../types/pet';

export const calculateAge = (birthYear: number): number => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - birthYear;
};

export const fixDateFormat = (date: string) =>
    date
        .split('-')
        .reverse()
        .join(
            '-',
        ); /* To be replaced with date-fns which is safer as it cover wider cases */

export const getUniquePetTypes = (pets: Pet[]): string[] => {
    const types = new Set<string>();
    pets.forEach((pet) => {
        types.add(pet.species);
    });
    return Array.from(types);
};

export const getMaxMinAges = (pets: Pet[]): { max: number; min: number } => {
    let max = 0;
    let min = Infinity;
    pets.forEach((pet) => {
        if (pet.age > max) {
            max = pet.age;
        }
        if (pet.age < min) {
            min = pet.age;
        }
    });
    return { max, min };
};
