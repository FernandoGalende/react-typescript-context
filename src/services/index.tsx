const cities = {
	title: 'Brothers of Destruction',
	artist: 'The Lemon Twigs',
	genre: 'Rock'
};

const getAlbumOfTheWeek = () => Promise.resolve({data: cities});

export {getAlbumOfTheWeek};
