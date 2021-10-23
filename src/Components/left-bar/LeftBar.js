import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './leftBar.scss'

const LeftBar = () => {
    let location = useLocation();
    return (
        <div id="left_bar">
            <div className="left_block">
                <h4>
                    MENU
                </h4>
                <ul>
                    <Link to="/profile">
                        <li className={location.pathname === "/profile" ? "active" : null} >
                        <i className="far fa-landmark"></i>
                            Maktab profili
                        </li>
                    </Link>
                    <Link to="/anketa">
                        <li className={location.pathname === "/anketa" ? "active" : null} >
                            <i className="fas fa-edit"></i>
                            Anketa
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
