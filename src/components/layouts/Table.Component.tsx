import React, {useContext} from 'react';
import {AdminStore} from '../../store/context/cities.context';

import Card from '../commons/Card/Card.component';
import SearchBar from '../commons/SearchBar/SearchBar.component';
import TotalSelect from '../commons/Total/Total.component';

import {selectCity, unSelectCity, unSelectAllCities, selectAllCities, filterShowableCities} from '../../store/actions';

import './Table.scss';

const TableComponent: React.FC = () => {
	const {state, dispatch} = useContext(AdminStore);
	const itemsSelected = state.cities.filter(city => city.selected === true);

	const onSelectedCity = (city: any) => {
		if (city.selected === true) {
			dispatch(selectCity(city));
			return;
		}
		dispatch(unSelectCity(city.id));
	};

	const onTotalClik = (mode: string) => {
		if (mode === 'unSelect') dispatch(unSelectAllCities());
		if (mode === 'select') dispatch(selectAllCities());
	};

	const onSearch = (value: string) => {
		dispatch(filterShowableCities(value));
	};

	return (
		<div className='table-container'>
			<table>
				<caption>
					<h1>Cities of China</h1>
				</caption>
				<tbody>
					<tr>
						<td>
							<SearchBar onChange={onSearch} />
						</td>
					</tr>
					<tr>
						<td>
							<div className='total-container'>
								<TotalSelect
									items={state.showableCities.length}
									onClick={() => onTotalClik('select')}
									buttonText='Select All'
								/>
							</div>
						</td>

						<td>
							<TotalSelect
								items={itemsSelected.length}
								onClick={() => onTotalClik('unSelect')}
								buttonText='Clear'
							/>
						</td>
					</tr>
					<tr>
						<td>
							{
								<div className='items-container'>
									{state.showableCities ? (
										state.showableCities.map((city: any) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: any) => onSelectedCity(city)}
											/>
										))
									) : (
										<div className='not-cities'>
											<span>no cities</span>
										</div>
									)}
								</div>
							}
						</td>
						<td>
							{
								<div className='items-selected'>
									{itemsSelected.length > 0 ? (
										itemsSelected.map((city: any) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: any) => onSelectedCity(city)}
											/>
										))
									) : (
										<div className='not-cities'>
											<span>no selected cities</span>
										</div>
									)}
								</div>
							}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
