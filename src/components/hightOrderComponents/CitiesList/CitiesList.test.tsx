import React from 'react';
import {render} from '@testing-library/react';
import {CitiesList} from './CitiesList';

test('renders learn react link', () => {
	const {getByText} = render(<CitiesList />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
