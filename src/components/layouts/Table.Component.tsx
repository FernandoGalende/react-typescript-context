import React from 'react';
import {CitiesConsumer} from '../../context/cities.context';

import Card from '../commons/Card/Card.component';
import SearchBar from '../commons/SearchBar/SearchBar.component';
import TotalSelect from '../commons/Total/total.component';

import './Table.scss';

const TableComponent: React.FC = () => {
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
							<CitiesConsumer>
								{citiesContext => (
									<div id='items-container'>
										{citiesContext && citiesContext.map(city => <Card key={city.id} city={city} />)}
									</div>
								)}
							</CitiesConsumer>
						</td>
						<td>
							<h1>selected</h1>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
