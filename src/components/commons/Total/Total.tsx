import React, {Fragment} from 'react';

import './Total.scss';

type TotalSelectedProps = {
	items: number;
	onClick: Function;
	children: React.ReactNode;
};

export const TotalSelect: React.FC<TotalSelectedProps> = ({items = 0, onClick, children}) => {
	return (
		<Fragment>
			<div className='total-wrap'>
				<p>{items} items</p>
				<div data-testid='button-test' className='button' onClick={() => onClick()}>
					{children}
				</div>
			</div>
		</Fragment>
	);
};
