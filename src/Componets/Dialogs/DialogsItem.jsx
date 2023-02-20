import React from 'react';
import {NavLink} from "react-router-dom";
import "./Dialogs.css";
const DialogsItem = (props) => {


    let path="/dialogs"+props.id;

    return (
        <div className="dialogs">

            <div className="items">
                <img src={props.amg} />
                <NavLink to={path}>{props.name}</NavLink>

            </div>
        </div>
    );
};


export default DialogsItem;
