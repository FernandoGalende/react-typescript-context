import React, {Fragment} from 'react';
import './SearchBar.scss';

type SearchBarProps = {
	onChange: Function;
};

export const SearchBar: React.FC<SearchBarProps> = ({onChange}) => {
	const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value.toLowerCase());
	};

	return (
		<Fragment>
			<div className='search-container'>
				<div className='text-input'>
					<input data-testid='input-test' type='text' id='input' onChange={searchInput} />
					<label data-testid='label-test' htmlFor='input'>
						Search:
					</label>
				</div>
			</div>
		</Fragment>
	);
};
