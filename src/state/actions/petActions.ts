import { fetchPetsData } from '../../services/petsService';
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
            const pets = await fetchPetsData();
            // Perform all necessary data transformations here
            const petsWithFormattedDatesAndAges = pets.map((pet) => ({
                ...pet,
                dateAdded: fixDateFormat(pet.dateAdded),
                age: calculateAge(pet.birthYear),
            }));
            const uniquePetTypes = getUniquePetTypes(
                petsWithFormattedDatesAndAges,
            );
            const maxMinAges = getMaxMinAges(petsWithFormattedDatesAndAges);

            // Now dispatch actions with the fully prepared data
            dispatch(fetchPetsSuccess(petsWithFormattedDatesAndAges));
            dispatch(fetchPetTypes(uniquePetTypes));
            dispatch(fetchPetsMaxAndMinAge(maxMinAges));
        } catch (error) {
            dispatch(fetchPetsFailure(error.message));
        }
    };
};
