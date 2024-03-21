import { Pet } from '../../types/pet';
import {
    FETCH_PETS_FAILURE,
    FETCH_PETS_REQUEST,
    FETCH_PETS_SUCCESS,
} from '../actions/petActions';

type PetsState = {
    loading: boolean;
    pets: Pet[];
    error: string | null;
};

const initialState = {
    pets: [],
    loading: false,
    error: null,
};

const petReducer = (state = initialState, action) => {
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
                pets: action.payload,
            };
        case FETCH_PETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default petReducer;
