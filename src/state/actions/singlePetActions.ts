import { fetchPetProfile } from '../../services/petsService';
import { Pet } from '../../types/pet';
import { calculateAge } from '../../utils/format-pet-data';
import { AppDispatch } from '../store';

export const FETCH_SINGLE_PET_REQUEST = 'FETCH_SINGLE_PET_REQUEST';
export const FETCH_SINGLE_PET_SUCCESS = 'FETCH_SINGLE_PET_SUCCESS';
export const FETCH_SINGLE_PET_FAILURE = 'FETCH_SINGLE_PET_FAILURE';

export const fetchPetSuccess = (pet: Pet) => ({
    type: FETCH_SINGLE_PET_SUCCESS,
    payload: pet,
});

export const fetchPetFailure = (error: string) => ({
    type: FETCH_SINGLE_PET_FAILURE,
    payload: error,
});

export const fetchPet = (id: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const pet: Pet = await fetchPetProfile(id);

            const petWithAge = {
                ...pet,
                age: calculateAge(pet.birthYear),
            };

            dispatch(fetchPetSuccess(petWithAge));
        } catch (error) {
            dispatch(fetchPetFailure(error.message));
        }
    };
};
