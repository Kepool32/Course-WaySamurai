import React from 'react';
import "./User.css"
import  axios from "axios";
import {Link, Navigate, NavLink, Routes} from "react-router-dom";
const User = (props) => {

    if (props.user.length===0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{



        props.setUser(response.data.items)

        });


    }


    return (
        <div className='user' >
            {
                props.user.map(u =><div className='users' key={u.id}>


                    <span>
           <div className='userses' >
                <span className='userSpan'>
                    <div className="iteem">

                        <NavLink to={"/profile/"}>
               <img src={'https://www.pngitem.com/pimgs/m/512-5125598_computer-icons-scalable-vector-graphics-user-profile-avatar.png'}/>
                        </NavLink>

                    {u.followed
                        ? <button className="custom-btn btn-13" onClick={()=>{props.unfollow(u.id)}}>unFollow</button>
                        : <button className="custom-btn btn-13" onClick={()=>{props.follows(u.id)}}>Follow</button>}

                    </div>

                   <span className='userSpanName'>

                       <div>{u.name}</div>

                       <div>{u.status}</div>

                    </span>

                </span>
                   <span className='userSpanloc'>

                       <div>{/*{u.location.country}*/}</div>



                       <div>{/*{u.location.city}*/}</div>



                   </span>



           </div>

        {/*   <div>
               {u.followed
                   ? <button className="custom-btn btn-13" onClick={()=>{props.unfollow(u.id)}}>unFollow</button>
                   : <button className="custom-btn btn-13" onClick={()=>{props.follows(u.id)}}>Follow</button>}


           </div>
*/}


       </span>
                </div>)

                    }
        </div>

    );
};

export default User;