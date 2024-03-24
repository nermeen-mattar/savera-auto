import { Pet } from '../../types/pet';
import {
    FETCH_SINGLE_PET_FAILURE,
    FETCH_SINGLE_PET_SUCCESS,
} from '../actions/singlePetActions';

interface PetState {
    loading: boolean;
    pet: Pet | null;
    error: string | null;
}

const initialState: PetState = {
    pet: null,
    loading: false,
    error: null,
};

interface Action {
    type: string;
    payload?: Pet | string;
}

const singlePetReducer = (
    state: PetState = initialState,
    action: Action,
): PetState => {
    switch (action.type) {
        case FETCH_SINGLE_PET_SUCCESS:
            return {
                ...state,
                loading: false,
                pet: action.payload as Pet,
            };
        case FETCH_SINGLE_PET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        default:
            return state;
    }
};

export default singlePetReducer;
