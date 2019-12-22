import React, {Fragment} from 'react';
import './SearchBar.scss';

type SearchBarProps = {
	onChange: any;
};

const SearchBar: React.FC<SearchBarProps> = ({onChange}) => {
	const searchInput = (evt: any) => {
		onChange(evt.target.value.toLowerCase());
	};

	return (
		<Fragment>
			<div className='search-container'>
				<div className='text-input'>
					<input type='text' id='input1' onChange={searchInput} />
					<label htmlFor='input1'>Search:</label>
				</div>
			</div>
		</Fragment>
	);
};

export default SearchBar;
