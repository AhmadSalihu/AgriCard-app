import React from 'react'
import { Link } from "react-router-dom"
// import './Navbar.styles.css'


function NavigationMenu(props) {
    return (
        <div id="navbar">
            <div className="py-3">
               <img src='https://maxiland.ng/img/about/7.png' alt="" />
            </div>
            <ul>
                <li>
                    <Link 
                        to="/dashbord" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        User Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/servicepage" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/agricard" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        AgriCard
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About 
                    </Link>
                </li>
                 <li>
                    <Link 
                        to="/agricard" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu