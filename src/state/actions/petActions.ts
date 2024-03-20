import { fetchPetsData } from '../../services/petsService';
import { Pet } from '../../types/pet';
import { AppDispatch } from '../store';

export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST';
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';

export const fetchPetsRequest = () => ({
    type: FETCH_PETS_REQUEST,
});

export const fetchPetsSuccess = (pets: Pet[]) => ({
    type: FETCH_PETS_SUCCESS,
    payload: pets,
});

export const fetchPetsFailure = (error: string) => ({
    type: FETCH_PETS_FAILURE,
    payload: error,
});

export const fetchPets = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchPetsRequest());
        try {
            const pets = await fetchPetsData();
            dispatch(fetchPetsSuccess(pets));
        } catch (error) {
            dispatch(fetchPetsFailure(error.message)); // TODO fix eslint
        }
    };
};
