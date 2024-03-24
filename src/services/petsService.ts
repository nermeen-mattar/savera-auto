import { Pet } from '../types/pet';
import api from './api';

export const fetchPetsList = async () => {
    try {
        const pets: Pet[] = await api.get('/pets');
        return pets;
    } catch (error) {
        throw new Error('Failed to fetch pets');
    }
};

export const fetchPetProfile = async (id: number) => {
    const errorMessage = 'Failed to fetch pet';
    try {
        const pets: Pet[] = await api.get(`/pets?id=${id}`);
        const pet = pets.find((pet) => pet.id === id);
        if (pet) {
            return pet;
        } else {
            throw new Error(errorMessage);
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};
