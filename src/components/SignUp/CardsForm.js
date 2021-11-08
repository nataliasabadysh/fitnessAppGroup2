import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import male from '../../images/male.png';
import female from '../../images/female.png'
import { uuid } from 'uuidv4';
import { selectPersonMale, selectPersonFemale } from '../../redux/auth/action';
import { useDispatch } from 'react-redux';

export const CardsContainer = () => {
	const dispath = useDispatch()

	const chooseMale = () => {
		dispath(selectPersonFemale)
	}
	const chooseFemale = () => {
		dispath(selectPersonMale)
	}
	return (<Card sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}  >
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
	</Card>);
}
