import { types } from "./type"

const initialState = {
	token: null,
	user: {
		firstName: '',
		lastName: '',
		email: '',
		age: null,
		weight: null,
		height: null,
	},
	isLogging: false,
	errorLogin: null,
	errorSignup: null,
	isAuthorised: false,
	personMale: false,
	personFemale: false,
}

export const authReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case types.LOG_IN: {
			return {
				...state,
				errorSignup: null,
				errorLogin: null,
				token: actions.payload.token,
				user: actions.payload.user
			}
		}

		case types.SELECT_PERSON_MALE: {
			return {
				...state,
				personMale: true,
				personFemale: false
			}
		}

		case types.SELECT_PERSON_FEMALE: {
			return {
				...state,
				personMale: false,
				personFemale: true
			}
		}

		case types.SIGN_UP: {
			return {
				...state,
				errorSignup: null,
				errorLogin: null,
				token: actions.payload.token,
				user: actions.payload.user
			}
		}

		case types.USER_SUCCESS: {
			return {
				...state,
				isAuthorised: true,
			}
		}

		case types.LOG_OUT: {
			return {
				...initialState,

			}
		}

		case types.SIGN_UP_ERROR: {
			return {
				token: null,
				user: {
					firstName: '',
					lastName: '',
					email: '',
					age: null,
					weight: null,
					height: null,
				},
				isLogging: false,
				errorSignup: actions.payload,
				errorLogin: null,
			}
		}

		case types.LOG_IN_ERROR: {
			return {
				token: null,
				user: {
					firstName: '',
					lastName: '',
					email: '',
					age: null,
					weight: null,
					height: null,
				},
				isLogging: false,
				errorSignup: null,
				errorLogin: actions.payload
			}
		}
		default:
			return state
	}
}