import { fetchPetsData } from '../../services/petsService';
import { Pet } from '../../types/pet';
import { calculateAge } from '../../utils/calculate-age';
import { AppDispatch } from '../store';

export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST';
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';
export const FETCH_PET_TYPES_SUCCESS = 'FETCH_PET_TYPES_SUCCESS';

export const fetchPetsRequest = () => ({
    type: FETCH_PETS_REQUEST,
});

export const fetchPetsSuccess = (pets: Pet[]) => ({
    type: FETCH_PETS_SUCCESS,
    payload: pets.map((pet) => ({
        ...pet,
        age: calculateAge(pet.birthYear),
    })),
});

export const fetchPetsFailure = (error: string) => ({
    type: FETCH_PETS_FAILURE,
    payload: error,
});

export const fetchPetTypesSuccess = (types: string[]) => ({
    type: FETCH_PET_TYPES_SUCCESS,
    payload: types,
});

export const fetchPets = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchPetsRequest());
        try {
            const pets = await fetchPetsData();
            dispatch(fetchPetsSuccess(pets));
            dispatch(fetchPetTypesSuccess(getUniquePetTypes(pets)));
        } catch (error) {
            dispatch(fetchPetsFailure(error.message));
        }
    };
};

const getUniquePetTypes = (pets: Pet[]): string[] => {
    const types: string[] = [];
    pets.forEach((pet) => {
        if (!types.includes(pet.species)) {
            types.push(pet.species);
        }
    });
    return types;
};
