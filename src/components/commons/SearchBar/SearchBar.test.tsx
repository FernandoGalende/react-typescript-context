import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {SearchBar} from './SearchBar';

const mockFuntion = jest.fn();

describe('<SearchBar />', () => {
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(<SearchBar onChange={mockFuntion}>click!</SearchBar>);
		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
	});

	it('should input exist', () => {
		expect(getByTestId('input-test')).toBeInTheDocument();
	});

	it('should label exist', () => {
		expect(getByTestId('label-test')).toHaveTextContent('Search:');
	});

	it('text on input should output function', async () => {
		const input = getByTestId('input-test');
		fireEvent.change(input, {target: {value: 'a'}});
		expect(mockFuntion).toHaveBeenCalledTimes(1);
	});

	it('text on input should have properly test', async () => {
		const input = getByTestId('input-test');
		fireEvent.change(input, {target: {value: 'a'}});
		expect(input.value).toEqual('a');
	});
});
