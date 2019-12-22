import React, {useContext} from 'react';
import {AdminStore} from '../../store/context/cities.context';

import Card from '../commons/Card/Card.component';
import SearchBar from '../commons/SearchBar/SearchBar.component';
import TotalSelect from '../commons/Total/Total.component';

import {selectCity, unSelectCity, unSelectAllCities, selectAllCities} from '../../store/actions';

import './Table.scss';

const TableComponent: React.FC = () => {
	const {state, dispatch} = useContext(AdminStore);

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

	return (
		<div className='table-container'>
			<table>
				<caption>
					<h1>Cities of China</h1>
				</caption>
				<tbody>
					<tr>
						<td>
							<SearchBar />
						</td>
					</tr>
					<tr>
						<td>
							<div className='total-container'>
								<TotalSelect
									items={state.cities.filter(city => city.selected === false).length}
									onClick={() => onTotalClik('select')}
									buttonText='select All'
								/>
							</div>
						</td>

						<td>
							<TotalSelect
								items={state.cities.filter(city => city.selected === true).length}
								onClick={() => onTotalClik('unSelect')}
								buttonText='clear'
							/>
						</td>
					</tr>
					<tr>
						<td>
							{
								<div className='items-container'>
									{state.cities &&
										state.cities.map((city: any) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: any) => onSelectedCity(city)}
											/>
										))}
								</div>
							}
						</td>
						<td>
							{
								<div className='items-selected'>
									{state.cities.filter(city => city.selected === true).length > 0 ? (
										state.cities
											.filter(city => city.selected === true)
											.map((city: any) => (
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
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
