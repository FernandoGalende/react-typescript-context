import React, {Fragment} from 'react';
import './Total.scss';

type TotalSelectedProps = {
	items: number;
	onClick: Function;
	children: React.ReactNode;
	selected: boolean;
};

export const TotalSelect: React.FC<TotalSelectedProps> = ({items = 0, onClick, children, selected}) => (
	<Fragment>
		<div className='total-wrap'>
			<p data-testid='items-test'>{items} items</p>
			{selected ? (
				<div data-testid='button-test' className='button' onClick={() => onClick()}>
					{children}
				</div>
			) : (
				<div data-testid='button-test-select' className='disable-button'>
					{children}
				</div>
			)}
		</div>
	</Fragment>
);
