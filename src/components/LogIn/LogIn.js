import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TextStyle, FormStyle, LayoutLogin, BackgroundLogin } from './LogInStyle';
import bcg from '../../images/loginBcg.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { logInUserAsync } from '../../redux/auth/action';
import { Link } from 'react-router-dom';
import { routers } from '../../utils/routes';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

export const LogIn = () => {

	const dispatch = useDispatch()
	const errorMessage = useSelector(state => state.auth.errorLogin)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			dispatch(logInUserAsync(values))
		},
	});
	return (
		<>
			<LayoutLogin>
				<BackgroundLogin style={{ backgroundImage: `url(${bcg})` }}>
					<TextStyle> Log In</TextStyle>
					{errorMessage && errorMessage.message
						&& <div style={{ border: '1px solid red', padding: 10, margin: 20, }}> {errorMessage.message}
							<Link to={routers.SIGNUP.path}> Go to SignUp</Link>
						</div>}
					<form onSubmit={formik.handleSubmit}>
						<FormStyle>
							<TextField sx={{}}
								fullWidth
								id="email"
								name="email"
								label="Email"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
							<TextField
								fullWidth
								id="password"
								name="password"
								label="Password"
								type="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
							<Button color="success" variant="contained" fullWidth type="submit">
								Submit
							</Button>
						</FormStyle>
					</form>
				</BackgroundLogin>
			</LayoutLogin>
		</>
	);
};

