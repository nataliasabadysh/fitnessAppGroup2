import { combineReducers } from 'redux';
import { authReducer } from '../redux/auth/reducer';

export const rootReducer = combineReducers({
	auth: authReducer,
});
