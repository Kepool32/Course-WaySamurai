import React from 'react';
import "./Mes.css";
const Mes = (props) => {

    return (
        <div className='con_img' >

            <img src="https://i.pinimg.com/736x/5e/d0/2b/5ed02be3eb1593daf1db30b5c15d3564--guy-fawkes-vinyl-decals.jpg" />
            <div>{props.message} </div>
            <div>like:{props.likepost}</div>

        </div>
    );
};

export default Mes;