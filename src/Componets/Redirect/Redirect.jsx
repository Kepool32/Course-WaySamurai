import React from 'react';
import {Navigate} from "react-router-dom";

const Redirect = () => {
    return (
        <div>
            <Navigate replace to="/login" />
        </div>
    );
};

export default Redirect;