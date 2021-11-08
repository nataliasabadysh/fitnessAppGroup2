import React from 'react';
import bcg from '../../images/runMen.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/auth/action';
import male from '../../images/male.png';
import female from '../../images/female.png'
import { CardMedia, Switch, Typography } from '@mui/material';
import { Controller, LayoutProfile, LayoutProfilePage, UserInfo } from './StyledProfile';

export const Profile = () => {
	const firstNameUser = useSelector(state => state.auth.user.firstName);
	const lastNameUser = useSelector(state => state.auth.user.lastName)
	const heightUser = useSelector(state => state.auth.user.height)
	const weightUser = useSelector(state => state.auth.user.weight)
	const emailUser = useSelector(state => state.auth.user.email)
	const ageUser = useSelector(state => state.auth.user.age)
	const femaleUser = useSelector(state => state.auth.personFemale)

	const dispath = useDispatch()

	const onLogOut = () => {
		dispath(logOutUser)
		localStorage.removeItem('auth')

	}
	return (
		<>
			<LayoutProfilePage>
				<Controller control={<Switch defaultChecked />} label="Log Out" onClick={onLogOut} />

				<img style={{ flex: '1 1 50%' }} src={bcg} width='700' />
				<LayoutProfile>
					{femaleUser ? <CardMedia
						objectfit='none'
						component="img"
						image={female}
						alt="female"
					/> : <CardMedia
						objectfit='none'
						component="img"
						image={male}
						alt="female"
					/>}
					<Typography variant="h5" gutterBottom component={UserInfo}>{firstNameUser}</Typography>
					<Typography variant="h5" gutterBottom component={UserInfo}>{lastNameUser}</Typography>
					<Typography variant="h5" gutterBottom component={UserInfo}>{emailUser}</Typography>
					<Typography variant="h5" gutterBottom component={UserInfo}>{ageUser}</Typography>
					<Typography variant="h5" gutterBottom component={UserInfo}>{heightUser}</Typography>
					<Typography variant="h5" gutterBottom component={UserInfo}>{weightUser}</Typography>
				</LayoutProfile>
			</LayoutProfilePage>
		</>
	);
};

