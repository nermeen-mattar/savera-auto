import { combineReducers } from 'redux';
import petReducer from './petReducer';
import singlePetReducer from './singlePetReducer';

const rootReducer = combineReducers({
    pets: petReducer,
    pet: singlePetReducer,
});

export default rootReducer;
