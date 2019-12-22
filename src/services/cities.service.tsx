import data from '../data/cities-of-china.json';
import {City} from '../interfaces/app.interfaces';

const getCitiesService = (): Promise<{data: City[]}> => {
	// Simulate a real api call delay
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				data: data.cities.map(city => {
					return {
						...city,
						selected: false
					};
				})
			});
		}, 500);
	});
};

export default getCitiesService;
