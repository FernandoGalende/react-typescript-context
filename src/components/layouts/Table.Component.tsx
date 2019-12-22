import React, {useContext} from 'react';
import {AdminStore} from '../../store/context/cities.context';

import Card from '../commons/Card/Card.component';
import SearchBar from '../commons/SearchBar/SearchBar.component';
import TotalSelect from '../commons/Total/Total.component';
import {selectCity, unSelectCity} from '../../store/actions';

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

	return (
		<div className='table-container'>
			<table>
				<caption>
					<h1>Cities of China</h1>
				</caption>
				<th>
					<SearchBar />
				</th>
				<th>
					<TotalSelect />
				</th>
				<tbody>
					<tr>
						<td>
							<div className='total-container'>
								<TotalSelect />
							</div>

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
									{state.selectedCities.length > 0 ? (
										state.selectedCities.map((city: any) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: any) => onSelectedCity(city)}
											/>
										))
									) : (
										<span>no cities</span>
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
