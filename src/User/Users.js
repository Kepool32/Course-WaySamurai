import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../Componets/API/api";


let Users=(props)=>{

    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages=[]
    for (let i = 1; i <pageCount+1; i++) {
        pages.push(i)

    }


    return<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && "styles"} onClick={(e) => {
                    props.onPageChange(p)
                }}>{p}</span>
            })}

        </div>
        <div className='user'>
            {
               props.user.map(u => <div className='users' key={u.id}>


                    <span>

           <div className='userses'>
                <span className='userSpan'>
                    <div className="iteem">
                   <NavLink to={"/profile/"+u.id }  >
               <img src={'https://www.pngitem.com/pimgs/m/512-5125598_computer-icons-scalable-vector-graphics-user-profile-avatar.png'}/>
                        </NavLink>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} className="custom-btn btn-13" onClick={() => {

                                props.unfollowes(u.id)
                               /* props.setfollowingInProgress(true,u.id)
                                userAPI.getFolow(u.id)
                                    .then(data => {

                                        if (data.resultCode === 0) {

                                            props.unfollow(u.id)
                                        }

                                        props.setfollowingInProgress(false,u.id)
                                    });*/




                            }}>unFollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} className="custom-btn btn-13" onClick={() => {
                                props.followses(u.id)
                               /* props.setfollowingInProgress(true,u.id)
                                userAPI.getUnfolow(u.id,{},{


                                })

                                    .then(data => {

                                        if (data.resultCode === 0) {

                                            props.follows(u.id)
                                        }
                                        props.setfollowingInProgress(false,u.id)
                                    });*/


                            }}>Follow</button>}

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
    </div>


}


export default Users