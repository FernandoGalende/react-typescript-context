import React, {Fragment} from 'react';
import {City} from '../../../store/types';

import './Card.scss';

type CardProps = {
	city: City;
	onSelect: Function;
};

export const Card: React.FC<CardProps> = ({city, onSelect}) => {
	const handleChange = () => {
		city.selected = !city.selected;
		onSelect(city);
	};

	return (
		<Fragment>
			<div className='card-container'>
				<div className='image-block' />
				<input type='checkbox' onChange={handleChange} checked={city.selected} />
				<div className='text-block'>
					<h4>{city.name}</h4>
					<h5>{city.chineseName}</h5>
				</div>
			</div>
		</Fragment>
	);
};
