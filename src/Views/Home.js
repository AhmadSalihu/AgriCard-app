import React from 'react'
import AgriStateCard from '../Components/agriCardState.component/agri_card_state'
// import Submenu from '../Slide-bar/Submenu/Submenu';

const Home = ({ searchChange }) => {
    return (
        <div className="flex justify-between space-around tc">
            <AgriStateCard searchChange={searchChange}/>
        </div>
    )
}

export default Home
