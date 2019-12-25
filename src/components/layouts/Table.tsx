import React from 'react';
import {Card, SearchBar, TotalSelect, TrackVisibility} from '../commons';
import './Table.scss';
import {City} from '../../store/types/index';

type TableProps = {
	itemsSelected: City[];
	showableCities: City[];
	onSearch: Function;
	onTotalClik: Function;
	onSelectedCity: Function;
};

export const Table: React.FC<TableProps> = ({itemsSelected, showableCities, onSearch, onTotalClik, onSelectedCity}) => (
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
								selected={itemsSelected.length !== showableCities.length}
								items={showableCities.length}
								onClick={() => onTotalClik('select')}>
								Select All
							</TotalSelect>
						</div>
					</td>

					<td>
						<div className='total-container'>
							<TotalSelect
								selected={itemsSelected.length > 0}
								items={itemsSelected.length}
								onClick={() => onTotalClik('unSelect')}>
								Clear
							</TotalSelect>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						{
							<TrackVisibility>
								<div className='items-container'>
									{showableCities ? (
										showableCities.map((city: City) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: City) => onSelectedCity(city)}
											/>
										))
									) : (
										<div className='not-cities'>
											<span>no cities</span>
										</div>
									)}
								</div>
							</TrackVisibility>
						}
					</td>
					<td>
						{
							<TrackVisibility>
								<div className='items-container'>
									{itemsSelected.length > 0 ? (
										itemsSelected.map((city: City) => (
											<Card
												key={city.id}
												city={city}
												onSelect={(city: City) => onSelectedCity(city)}
											/>
										))
									) : (
										<div className='not-cities'>
											<span>no selected cities</span>
										</div>
									)}
								</div>
							</TrackVisibility>
						}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);
