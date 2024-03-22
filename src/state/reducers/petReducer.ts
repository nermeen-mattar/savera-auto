import { Pet } from '../../types/pet';
import {
    FETCH_PETS_FAILURE,
    FETCH_PETS_REQUEST,
    FETCH_PETS_SUCCESS,
    FETCH_PET_TYPES_SUCCESS,
} from '../actions/petActions';

interface PetsState {
    loading: boolean;
    pets: Pet[];
    types: string[];
    error: string | null;
}

const initialState: PetsState = {
    pets: [],
    types: [],
    loading: false,
    error: null,
};

interface Action {
    type: string;
    payload?: Pet[] | string | string[];
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
        case FETCH_PET_TYPES_SUCCESS:
            return {
                ...state,
                types: action.payload as string[],
            };
        case FETCH_PETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        default:
            return state;
    }
};

export default petReducer;
