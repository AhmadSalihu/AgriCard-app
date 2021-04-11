// eslint-disable-next-line 
import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import './Header.styles.css';
import AgriCardServices from './Servicespages/agricard.services';
// import { useLocation } from  'react-router-dom';
import { auth } from '../firebase'


function Header({ currentUser }) {
    // const location = useLocation()
    return (
        <>
        <header  style={{ fontSize: '20px', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-between' }}  className="sm:text-left border-b p-0 shadow-2xl">
              <Link to="/">
                	 <div>
                    <img  className='font' src='/logoimages/Agricard_log.jpg' alt='agricard.logo' />
                </div>
                    </Link>
        <div style={{ dispaly: 'flex', padding: '8px 5px', margin: '7px'}}>          
           <AgriCardServices />
            </div>
                    <div className="dropdown">
                        <button style={{ fontSize: '20px' }} className="dropbtn">SERVICES</button>
                        <div className="dropdown-content">
                            <a href="/acquatic">Acquatic</a>
                            <a href="/agric_entrepreneur">Agro Entreprenuer</a>
                            <a href="/grains">Grains</a>
                            <a href="/livestock">Livestock</a>
                            <a href="/mixedagric">Mixed Farming</a>
                            <a href="/poultry">Poultry</a>
                        </div>
                </div>  
                {/* <Link to='/register_page' style={{ fontSize: '20px', dispaly: 'flex', cursor: 'pointer', padding: '15px 15px', margin: '10px' }} className="dropbtn">REGISTER</Link>  */}
                { currentUser ? <div style={{ fontSize: '20px', dispaly: 'flex', cursor: 'pointer', padding: '15px 15px', margin: '10px' }} className="dropbtn" onClick={() => auth.signOut()}>SIGNOUT</div>
                    : (<Link style={{ fontSize: '16px', dispaly: 'flex', padding: '15px 15px', margin: '10px' }} className="dropbtn" to='/sign_up'>SIGNUP</Link>)}
            <div style={{ fontSize: '16px',  dispaly: 'flex', padding: '15px 15px', margin: '10px'}}>  
            <Navigation />
            </div>
            </header>

        </>
    )
}

export default Header; 