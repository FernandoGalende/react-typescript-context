import data from '../data/cities-of-china.json';
import {City} from '../interfaces/app.interfaces';

const getCitiesService = (): Promise<{data: City[]}> => {
	// Simulate a real api call delay
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({data: data.cities});
		}, 500);
	});
};

export default getCitiesService;
