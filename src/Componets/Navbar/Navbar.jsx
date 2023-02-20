import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";

import s from './Navbar.css';
const Navbar = () => {
    return (

            <nav className='nav'>
                <div className='item'>
                <div>
                    <NavLink to="profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink  to="dialogs" activeClassName={s.active}>Messages</NavLink>

                </div>
                    <div>
                        <NavLink  to="user" activeClassName={s.active}>Users</NavLink>

                    </div>
                <div>
                    <NavLink  to="news" activeClassName={s.active}>News</NavLink>

                </div>
                <div>
                    <NavLink  to="music" activeClassName={s.active}>Music</NavLink>

                </div>
                <div>
                    <NavLink  to="setting" activeClassName={s.active}>Setting</NavLink>

                </div>
                </div>
            </nav>

    );
};

export default Navbar;