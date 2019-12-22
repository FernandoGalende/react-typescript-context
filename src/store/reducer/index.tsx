import {Action, CitiesState} from '../types';

export const initialState: CitiesState = {
	cities: [],
	selectedCities: []
};

export const reducer = (state: CitiesState, action: Action): CitiesState => {
	switch (action.type) {
		case 'ADD_CITIES':
			return {
				...state,
				cities: action.payload
			};

		case 'SELECT_CITY':
			return {
				...state,
				selectedCities: [...state.selectedCities, action.payload]
			};

		case 'UNSELECT_CITY':
			return {
				...state,
				selectedCities: state.selectedCities.filter(city => city.id !== action.payload)
			};

		default:
			return state;
	}
};
