import React, {createContext, useEffect, useState} from 'react';
import {getCitiesService} from '../services/index';

import {City} from '../interfaces/app.interfaces';
import {AuxProps} from './AuxProps';

const CitiesContext = createContext<City[] | null>(null);

const {Provider, Consumer} = CitiesContext;

const CitiesProvider = (props: AuxProps) => {
	const [cities, setCities] = useState();

	useEffect(() => {
		getCitiesService().then(res => {
			setCities(res.data);
		});
	}, []);

	return <Provider value={cities}>{props.children}</Provider>;
};

export {CitiesProvider, Consumer as CitiesConsumer};
