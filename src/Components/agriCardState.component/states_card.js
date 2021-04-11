import React from 'react'
import { data } from '../../agrikad.data'
import StateCard from './state_card'

const StatesCard = () => {
	return (
		<div style={{backgroundColor: 'green'}} className='row center'>
			{
				data.map((data) => (
					<StateCard key={data.id} data={data} />
				)) 
			}
		</div>
	)
}

export default StatesCard
 