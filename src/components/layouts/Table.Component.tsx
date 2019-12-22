import React, {useContext} from 'react';
import {AdminStore} from '../../store/context/cities.context';

import Card from '../commons/Card/Card.component';
import SearchBar from '../commons/SearchBar/SearchBar.component';
import TotalSelect from '../commons/Total/Total.component';

import './Table.scss';

const TableComponent: React.FC = () => {
	const {state, dispatch} = useContext(AdminStore);

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
								<div id='items-container'>
									{state.cities &&
										state.cities.map((city: any) => <Card key={city.id} city={city} />)}
								</div>
							}
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
