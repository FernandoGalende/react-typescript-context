import React, {createContext, useEffect, useState} from 'react';

import {getCitiesService} from '../services/index';

interface AuxProps {
	children: React.ReactNode;
}

interface Cities {
	'id': string;
	'name': string;
	'chineseName': string;
}

const CitiesContext = createContext<Cities[] | null>(null);

const {Provider, Consumer} = CitiesContext;

const CitiesProvider = (props: AuxProps) => {
	const [cities, setCities] = useState();

	useEffect(() => {
		getCitiesService().then((res) => {
			setCities(res.data);
		});
	}, []);

	return <Provider value={cities}>{props.children}</Provider>;
};

export {CitiesProvider, Consumer as CitiesConsumer};
