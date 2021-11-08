import React from 'react';
import { useFormik } from 'formik';
import { Button, CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CardsContainer } from './CardsForm';
import bcg from '../../images/boxer_bcg_reg.jpeg'
import * as Yup from 'yup';
import createUserAsync from '../../redux/auth/action'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routers } from '../../utils/routes';
import { selectPersonMale, selectPersonFemale } from '../../redux/auth/action';
import { uuid } from 'uuidv4';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import male from '../../images/male.png';
import female from '../../images/female.png'



const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
	weight: Yup.string()
		.min(2, 'Too Short!')
		.required('Required'),
	height: Yup.string()
		.min(3, 'Too Short!')
		.required('Required'),
	age: Yup.string()
		.required('Required'),
});
export const SignUp = () => {

	const dispatch = useDispatch();
	const chooseMale = () => {
		dispatch(selectPersonFemale)
	}
	const chooseFemale = () => {
		dispatch(selectPersonMale)
	}
	const errorMessage = useSelector(state => state.auth.errorSignup)
	const femaleUser = useSelector(state => state.auth.personFemale)
	const maleUser = useSelector(state => state.auth.personMale)

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			age: '',
			weight: '',
			height: '',
			personMale: '',
			personFemale: ''

		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log(values)
			if (femaleUser === false && maleUser === false) {
				toast.info(`Please, choose  your personal male!`)
			} else {
				dispatch(createUserAsync(values))
			}
		},
	});
	return (

		<div style={{ display: 'flex' }}>
			<div style={{ flex: '1 1 50%' }}>
				<Card sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}  >
					<TextField
						id="personMale"
						name="personMale"
						value={formik.values.personMale}
						onChange={formik.handleChange}
						type='hidden'
					/>
					<CardActionArea onClick={chooseMale}>
						<Card sx={{ display: 'flex', flexDirection: 'column' }} >
							<CardMedia
								objectfit='none'
								component="img"
								image={female}
								alt="female"
								id={uuid()}
							/>
							<Typography gutterBottom variant="h5" component="div">
								Female
							</Typography>
						</Card>
					</CardActionArea>
					<CardActionArea onClick={chooseFemale}>
						<Card sx={{ display: 'flex', flexDirection: 'column' }} >
							<CardMedia
								objectfit='none'
								component="img"
								image={male}
								alt="male"
								key={uuid()}
							/>
							<Typography gutterBottom variant="h5" component="div">
								Lizard
							</Typography>
						</Card>
					</CardActionArea>
				</Card>
				<form onSubmit={formik.handleSubmit}>
					{errorMessage && errorMessage.message
						&& <div style={{ border: '1px solid red', padding: 10, margin: 20, }}> {errorMessage.message}
							<Link to={routers.LOGIN.path}> Go to Login</Link>
						</div>}
					<TextField
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
						id="firstName"
						name="firstName"
						label="Name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>	<TextField
						fullWidth
						id="lastName"
						name="lastName"
						label="Last Name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						helperText={formik.touched.lastName && formik.errors.lastName}
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
					<TextField
						fullWidth
						id="age"
						name="age"
						label="Age"
						type='number'
						value={formik.values.age}
						onChange={formik.handleChange}
						error={formik.touched.age && Boolean(formik.errors.age)}
						helperText={formik.touched.age && formik.errors.age}
					/>
					<TextField
						fullWidth
						id="height"
						name="height"
						label="Height"
						type='number'
						value={formik.values.height}
						onChange={formik.handleChange}
						error={formik.touched.height && Boolean(formik.errors.height)}
						helperText={formik.touched.height && formik.errors.height}
					/>
					<TextField
						fullWidth
						id="weight"
						name="weight"
						label="Weight"
						type='number'
						value={formik.values.weight}
						onChange={formik.handleChange}
						error={formik.touched.weight && Boolean(formik.errors.weight)}
						helperText={formik.touched.weight && formik.errors.weight}
					/>
					<Button color="primary" variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</form>
			</div>
			<img style={{ flex: '1 1 50%' }}
				src={bcg}
				width='700'
			/>
		</div>
	);
};

