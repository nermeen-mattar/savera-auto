import { Pet } from '../types/pet';
import api from './api';

export const fetchPetsData = async () => {
    try {
        const pets: Pet[] = await api.get('/pets');
        return pets;
    } catch (error) {
        throw new Error('Failed to fetch pets');
    }
};
