import React, {createContext, useEffect, useReducer} from 'react';

import {getCitiesService} from '../../services';
import {initialState, reducer} from '../reducer';
import * as CitiesActions from '../actions';

import {AuxProps, ContextProps} from '../types';

const AdminStore = createContext<ContextProps>({} as ContextProps);

const {Provider, Consumer} = AdminStore;

const CitiesProvider = (props: AuxProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		getCitiesService().then(res => {
			dispatch(CitiesActions.addCities(res.data));
		});
	}, []);

	const value = {state, dispatch};

	return <Provider value={value}>{props.children}</Provider>;
};

export {AdminStore, CitiesProvider, Consumer as CitiesConsumer};
