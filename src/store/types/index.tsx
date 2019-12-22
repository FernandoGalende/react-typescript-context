import React, {Dispatch} from 'react';

export interface City {
	'id': string;
	'name': string;
	'chineseName': string;
}

export interface Action {
	type: string;
	payload: any;
}

export interface AuxProps {
	children: React.ReactNode;
}

export interface CitiesState {
	cities: City[];
	selectedCities: City[];
}

export interface ContextProps {
	state: CitiesState;
	dispatch: Dispatch<Action>;
}

export interface AddCities {
	type: string;
	payload: City[];
}

export interface SelectCity {
	type: string;
	payload: City;
}
