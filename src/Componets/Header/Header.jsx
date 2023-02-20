import React from 'react';
import './Header.css';
import {NavLink, Navigate} from "react-router-dom";
import {Outlet} from "react-router";
import Redirect from "../Redirect/Redirect";


const Header = (props) => {

   /* if(props.isAuth===false)
         <Redirect/>*/


    return (
        <div className="header">
            <img src ='https://kartinkin.net/uploads/posts/2021-01/1610501112_2-p-kruglii-fon-dlya-logotipa-3.png'/>
            <div className="login_block">
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
