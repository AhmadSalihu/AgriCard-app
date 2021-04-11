import React from 'react'
const SearchBox = ({ searchChange }) => {
		return (
			<div>
				<input type="text" placeholder="search state" onChange={searchChange} />
				
		</div>
	)
}



export default SearchBox;