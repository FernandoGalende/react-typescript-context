import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TotalSelect} from './Total';

const mockFuntion = jest.fn();

describe('<Button />', () => {
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<TotalSelect onClick={mockFuntion} items={4}>
				click!
			</TotalSelect>
		);
		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
	});

	it('should be exist', () => {
		expect(getByTestId('button-test')).toBeInTheDocument();
	});

	it('should contain click! text', () => {
		expect(getByTestId('button-test')).toHaveTextContent('click!');
	});

	it('click should be fire function', () => {
		const button = getByTestId('button-test');
		fireEvent.click(button);
		expect(mockFuntion).toBeCalled();
	});

	it('click should be fire function', () => {
		const button = getByTestId('button-test');
		fireEvent.click(button);
		fireEvent.click(button);
		expect(mockFuntion).toHaveBeenCalledTimes(3);
	});
});
