import { combineReducers } from 'redux';
import petReducer from './petReducer';

const rootReducer = combineReducers({
    pet: petReducer,
});

export default rootReducer;
