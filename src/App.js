import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { LogInPage } from "./pages/auth/LoginPage";
import { ProfilePage } from "./pages/auth/ProfilePage";
import { Registration } from "./pages/auth/RegistrationPage";
import { signUpData, signUpUserSuccess } from './redux/auth/action'
import { routers } from "./utils/routes";

function App() {
	const dispath = useDispatch()
	const isAuthorised = useSelector(state => state.auth.isAuthorised)

	useEffect(() => {
		const ls = JSON.parse(localStorage.getItem('auth'))
		if (ls) {
			dispath(signUpData(ls))
			dispath(signUpUserSuccess)
		}
	}, [])
	return (<>
		<Router>
			<Navigation />
			<Switch>
				{!isAuthorised && <>
					<Route path={routers.SIGNUP.path} component={Registration} />
					<Route path={routers.LOGIN.path} component={LogInPage} />
					<Redirect to={routers.LOGIN.path} />
				</>
				}
				{isAuthorised && <>
					<Route path={routers.PROFILE.path} component={ProfilePage} />
					<Redirect to={routers.PROFILE.path} />
				</>}
			</Switch>
		</Router>
	</>
	);
}

export default App;
