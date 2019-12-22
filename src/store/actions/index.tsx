import {City} from '../../interfaces/app.interfaces';
import {AddCities, SelectCity} from '../types';

export function addCities(cities: City[]): AddCities {
	return {
		type: 'ADD_CITIES',
		payload: cities
	};
}

export function selectCity(city: City): SelectCity {
	return {
		type: 'SELECT_CITY',
		payload: city
	};
}
