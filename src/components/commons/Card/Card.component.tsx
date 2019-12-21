import React, {Fragment} from 'react';
import {City} from '../../../interfaces/app.interfaces';

import './Card.scss';

type CardProps = {
	city: City;
};

const Card: React.FC<CardProps> = ({city}) => (
	<Fragment>
		<div className='container'>
			<div className='image-block' />
			<input type='checkbox' />
			<div className='text-block'>
				<h4>{city.name}</h4>
				<h5>{city.chineseName}</h5>
			</div>
		</div>
	</Fragment>
);

export default Card;
