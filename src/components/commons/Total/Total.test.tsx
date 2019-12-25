import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TotalSelect} from './Total';

let getByTestId: Function;
let queryByTestId: Function;
let container: HTMLElement;
const mockFuntion = jest.fn();

describe('<Button select={true}/>', () => {
	beforeEach(() => {
		const queries = render(
			<TotalSelect onClick={mockFuntion} items={4} selected={true}>
				click!
			</TotalSelect>
		);
		container = queries.container;
		getByTestId = queries.getByTestId;
		queryByTestId = queries.queryByTestId;
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

	it('should contain 4 items', () => {
		expect(getByTestId('items-test')).toHaveTextContent('4');
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

	it('should be not exist', () => {
		expect(queryByTestId('button-test-select')).toBeNull();
	});

	it('should be not exist', () => {
		expect(queryByTestId('button-test')).toBeInTheDocument();
	});
});

describe('<Button select={false}/>', () => {
	beforeEach(() => {
		const queries = render(
			<TotalSelect onClick={mockFuntion} items={4} selected={false}>
				click!
			</TotalSelect>
		);
		getByTestId = queries.getByTestId;
		queryByTestId = queries.queryByTestId;
	});

	it('should be exist', () => {
		expect(getByTestId('button-test-select')).toBeInTheDocument();
	});

	it('should have not clickeable button', () => {
		expect(queryByTestId('button-test')).toBeNull();
	});

	it('should be proper disable', () => {
		const $Grey40 = '#97a1b8';
		expect(getByTestId('button-test-select').style.color).not.toEqual($Grey40);
	});
});
