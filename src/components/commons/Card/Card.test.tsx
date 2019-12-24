import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Card} from './Card';

const mockFuntion = jest.fn();
const mockCity = {
	id: 'fakeId',
	name: 'fakeName',
	chineseName: 'fackeChineseName',
	selected: false
};

describe('<SearchBar />', () => {
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<Card onSelect={mockFuntion} city={mockCity}>
				click!
			</Card>
		);
		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
	});

	it('should input exist', () => {
		expect(getByTestId('card-test')).toBeInTheDocument();
	});

	it('should has properly name', () => {
		expect(getByTestId('name-test')).toHaveTextContent('fakeName');
	});

	it('should has properly name', () => {
		expect(getByTestId('chineseName-test')).toHaveTextContent('fackeChineseName');
	});

	it('input should fire output function', async () => {
		const input = getByTestId('input-test');
		fireEvent.click(input);
		expect(mockFuntion).toHaveBeenCalled();
	});

	it('text on input should have properly test', async () => {
		const input = getByTestId('input-test');
		fireEvent.change(input, {target: {checked: true}});
		expect(mockFuntion).toHaveBeenCalledTimes(1);
	});
});
