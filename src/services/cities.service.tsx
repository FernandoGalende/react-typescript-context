import data from '../data/cities-of-china.json';

type cities = {
	'id': string;
	'name': string;
	'chineseName': string;
};

const getCitiesService = (): Promise<{data: cities[]}> => {
	// Simulate a real api call delay
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({data: data.cities});
		}, 500);
	});
};

export default getCitiesService;
