// Core
import { combineReducers } from 'redux';

const userReducer = (state={name: ''}, actions) => state

// Reducers
export const rootReducer = combineReducers({
    user: userReducer
});
