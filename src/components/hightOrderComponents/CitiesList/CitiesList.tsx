import React, {useContext} from 'react';
import {AdminStore} from '../../../store/context/cities.context';
import * as actions from '../../../store/actions';
import {Table} from '../../layouts/Table';
import {City} from '../../../store/types';

import './CitiesList.scss';

export const CitiesList: React.FC = () => {
	const {state, dispatch} = useContext(AdminStore);
	const itemsSelected = state.showableCities.filter((city: City) => city.selected === true);

	const onSearch = (value: string) => dispatch(actions.filterShowableCities(value));

	const onTotalClik = (mode: string) => {
		if (mode === 'unSelect') {
			dispatch(actions.unSelectAllCities());
			return;
		}
		dispatch(actions.selectAllCities());
	};

	const onSelectedCity = (city: City) =>
		city.selected === true ? dispatch(actions.selectCity(city)) : dispatch(actions.unSelectCity(city.id));

	return (
		<div className='cities-container'>
			<div className='cities-wrap'>
				<Table
					itemsSelected={itemsSelected}
					showableCities={state.showableCities}
					onSearch={onSearch}
					onTotalClik={onTotalClik}
					onSelectedCity={onSelectedCity}
				/>
			</div>
		</div>
	);
};
