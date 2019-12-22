import React, {Dispatch} from 'react';

export interface City {
	'id': string;
	'name': string;
	'chineseName': string;
	'selected': boolean;
}

export interface Action {
	type: string;
	payload?: any;
}

export interface AuxProps {
	children: React.ReactNode;
}

export interface CitiesState {
	cities: City[];
}

export interface ContextProps {
	state: CitiesState;
	dispatch: Dispatch<Action>;
}
