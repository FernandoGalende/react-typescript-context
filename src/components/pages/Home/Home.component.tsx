import React from 'react';
import './Home.module.scss';

import {CitiesConsumer} from '../../../context/cities.context';

const Home: React.FC = () => {
	return (
		<div className='Home'>
			<header className='App-header'>
				<p>Home component</p>
				<CitiesConsumer>
					{(citiesContext) => <h1>{citiesContext && citiesContext.map((city) => <h1>{city.name}</h1>)}</h1>}
				</CitiesConsumer>
			</header>
		</div>
	);
};

export default Home;
