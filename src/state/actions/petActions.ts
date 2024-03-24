import { fetchPetsList } from '../../services/petsService';
import { Pet } from '../../types/pet';
import {
    calculateAge,
    fixDateFormat,
    getMaxMinAges,
    getUniquePetTypes,
} from '../../utils/format-pet-data';
import { AppDispatch } from '../store';

export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST';
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';
export const FETCH_PET_TYPES = 'FETCH_PET_TYPES';
export const FETCH_PETS_MAX_MIN_AGES = 'FETCH_PETS_MAX_MIN_AGES';

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

export const fetchPetTypes = (types: string[]) => ({
    type: FETCH_PET_TYPES,
    payload: types,
});

export const fetchPetsMaxAndMinAge = (ages: { max: number; min: number }) => ({
    type: FETCH_PETS_MAX_MIN_AGES,
    payload: ages,
});

export const fetchPets = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchPetsRequest());
        try {
            const pets = await fetchPetsList();
            // Perform all necessary data transformations here
            const formattedPets = pets.map((pet) => ({
                ...pet,
                dateAdded: fixDateFormat(pet.dateAdded),
                age: calculateAge(pet.birthYear),
            }));

            // Now dispatch action with the fully prepared data
            dispatch(fetchPetsSuccess(formattedPets));

            const uniquePetTypes = getUniquePetTypes(formattedPets);
            const maxMinAges = getMaxMinAges(formattedPets);

            dispatch(fetchPetTypes(uniquePetTypes));
            dispatch(fetchPetsMaxAndMinAge(maxMinAges));
        } catch (error) {
            dispatch(fetchPetsFailure(error.message));
        }
    };
};
