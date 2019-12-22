import {Action, CitiesState} from '../types';

export const initialState: CitiesState = {
	cities: [],
	selectedCities: []
};

export const reducer = (state: CitiesState, action: Action): CitiesState => {
	switch (action.type) {
		case 'ADD_CITIES':
			console.log('ADD_CITIES: ', action.payload);
			return {
				...state,
				cities: action.payload
			};

		case 'SELECT_CITY':
			console.log('SELECT_CITY: ', action.payload);
			return {
				...state,
				selectedCities: [...state.selectedCities, action.payload]
			};

		default:
			return state;
	}
};
