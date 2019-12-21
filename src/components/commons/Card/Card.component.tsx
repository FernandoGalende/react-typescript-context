import React, {Fragment} from 'react';
import {City} from '../../../interfaces/app.interfaces';

import './Card.scss';

type CardProps = {
	city: City;
};

const Card: React.FC<CardProps> = ({city}) => (
	<Fragment>
		<div className='container'>
			<input type='checkbox' />
			<div className='text-block'>
				<h4>{city.name}</h4>
				<h4>{city.chineseName}</h4>
			</div>
		</div>
	</Fragment>
);

export default Card;
