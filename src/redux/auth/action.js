//sync-obj

import { createUser, signIn } from "../../api/auth"
import { types } from "./type"

const signUpUserRequest = {
	type: types.USER_REQUEST
}
export const selectPersonMale = {
	type: types.SELECT_PERSON_MALE
}
export const selectPersonFemale = {
	type: types.SELECT_PERSON_FEMALE
}
export const logOutUser = {
	type: types.LOG_OUT
}
export const signUpUserSuccess = {
	type: types.USER_SUCCESS
}

export const signUpData = (user) => ({
	type: types.SIGN_UP,
	payload: user
})


const logInData = (response) => ({
	type: types.LOG_IN,
	payload: response
})

const signUpError = (message) => ({
	type: types.SIGN_UP_ERROR,
	payload: message
})

const logInError = (message) => ({
	type: types.LOG_IN_ERROR,
	payload: message
})

export const createUserAsync = (credentials) => (dispatch) => {

	dispatch(signUpUserRequest)
	createUser(credentials)
		.then(response => {
			dispatch(signUpData(response))
			dispatch(signUpUserSuccess)
			localStorage.setItem('auth', JSON.stringify(response))
		})
		.catch(error => dispatch(signUpError(error)))
}


export const logInUserAsync = (credentials) => (dispatch) => {

	dispatch(signUpUserRequest)
	signIn(credentials)
		.then(response => {
			dispatch(logInData(response))
			dispatch(signUpUserSuccess)
			localStorage.setItem('auth', JSON.stringify(response))
		})
		.catch(
			error => dispatch(logInError(error)))
}
/*export const logOutUserAsync = () => (dispatch) => {
	signOut()
	dispatch(logOutUser) 

}*/
export default createUserAsync