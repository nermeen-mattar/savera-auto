import { AgeRange } from '../../types/ageRange';
import { Pet } from '../../types/pet';
import {
    FETCH_PETS_FAILURE,
    FETCH_PETS_MAX_MIN_AGES,
    FETCH_PETS_REQUEST,
    FETCH_PETS_SUCCESS,
    FETCH_PET_TYPES,
} from '../actions/petActions';

interface PetsState {
    loading: boolean;
    pets: Pet[];
    types: string[];
    error: string | null;
    maxMinAge: AgeRange;
}

const initialState: PetsState = {
    pets: [],
    types: [],
    loading: false,
    error: null,
    maxMinAge: {
        min: 0,
        max: 100,
    },
};

interface Action {
    type: string;
    payload?: Pet[] | string | string[] | AgeRange;
}

const petReducer = (
    state: PetsState = initialState,
    action: Action,
): PetsState => {
    switch (action.type) {
        case FETCH_PETS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PETS_SUCCESS:
            return {
                ...state,
                loading: false,
                pets: action.payload as Pet[],
            };
        case FETCH_PETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        case FETCH_PET_TYPES:
            return {
                ...state,
                types: action.payload as string[],
            };
        case FETCH_PETS_MAX_MIN_AGES:
            return {
                ...state,
                maxMinAge: action.payload as AgeRange,
            };
        default:
            return state;
    }
};

export default petReducer;
