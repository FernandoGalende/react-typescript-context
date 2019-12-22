import {City} from '../../store/types';
import {Action} from '../types';

export function addCities(cities: City[]): Action {
	return {
		type: 'ADD_CITIES',
		payload: cities
	};
}

export function selectCity(city: City): Action {
	return {
		type: 'SELECT_CITY',
		payload: city
	};
}

export function unSelectCity(city: City): Action {
	return {
		type: 'UNSELECT_CITY',
		payload: city
	};
}

export function unSelectAllCities(): Action {
	return {
		type: 'UNSELECT_ALL_CITIES'
	};
}

export function selectAllCities(): Action {
	return {
		type: 'SELECT_ALL_CITIES'
	};
}
export function filterShowableCities(value: string): Action {
	return {
		type: 'FILTER_SHOWABLE_CITIES',
		payload: value
	};
}
