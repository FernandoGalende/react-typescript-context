import {Action, CitiesState} from '../types';

export const initialState: CitiesState = {
	cities: [],
	showableCities: []
};

export const reducer = (state: CitiesState, action: Action): CitiesState => {
	switch (action.type) {
		case 'ADD_CITIES':
			return {
				...state,
				cities: action.payload,
				showableCities: action.payload
			};

		case 'SELECT_CITY':
			return {
				...state,
				cities: state.cities.map(city => {
					if (city.id === action.payload.id) city.selected = true;
					return city;
				})
			};

		case 'UNSELECT_CITY':
			return {
				...state,
				cities: state.cities.map(city => {
					if (city.id === action.payload.id) city.selected = false;
					return city;
				})
			};

		case 'UNSELECT_ALL_CITIES':
			return {
				...state,
				cities: state.cities.map(city => {
					city.selected = false;
					return city;
				})
			};

		case 'SELECT_ALL_CITIES':
			return {
				...state,
				cities: state.cities.map(city => {
					city.selected = true;
					return city;
				})
			};

		case 'FILTER_SHOWABLE_CITIES':
			return {
				...state,
				showableCities: state.cities.filter(city => city.name.toLocaleLowerCase().includes(action.payload))
			};

		default:
			return state;
	}
};
