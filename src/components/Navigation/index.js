import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { routers } from "../../utils/routes"

export const Navigation = () => {

	const isAuthorised = useSelector(state => state.auth.isAuthorised)

	return isAuthorised ? <nav>
		<NavLink to={routers.PROFILE.path} activeStyle={{ color: 'red' }} style={{ color: 'purple', margin: 20 }}> PROFILE </NavLink>
	</nav> : <nav>
		<NavLink to={routers.LOGIN.path} activeStyle={{ color: 'red' }} style={{ color: 'purple', margin: 20 }}>LOG IN </NavLink>
		<NavLink to={routers.SIGNUP.path} activeStyle={{ color: 'red' }} style={{ color: 'purple', margin: 20 }}> SIGN UP </NavLink>
	</nav>
}