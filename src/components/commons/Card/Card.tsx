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
			<div className='card-container' data-testid='card-test'>
				<div className='image-block' data-testid='image-test' />
				<input type='checkbox' onChange={handleChange} checked={city.selected} data-testid='input-test' />
				<div className='text-block'>
					<h5 data-testid='name-test'>{city.name}</h5>
					<h6 data-testid='chineseName-test'>{city.chineseName}</h6>
				</div>
			</div>
		</Fragment>
	);
};
