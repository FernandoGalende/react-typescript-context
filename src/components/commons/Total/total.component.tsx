import React, {Fragment} from 'react';

import './Total.scss';

type TotalSelectedProps = {
	items: number;
	onClick: any;
	buttonText: string;
};

const TotalSelect: React.FC<TotalSelectedProps> = ({items = 0, onClick, buttonText}) => {
	return (
		<Fragment>
			<div className='total-wrap'>
				<p>{items} items</p>
				<div className='button' onClick={() => onClick()}>
					{buttonText}
				</div>
			</div>
		</Fragment>
	);
};

export default TotalSelect;
