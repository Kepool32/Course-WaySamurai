import React from 'react';
import "./Profile.css"
import Myposts from "./MyPosts/Myposts";
import profilepageReducer from "../../redax/profilepage-reducer";
import StoreContext from "../../StoreContext";
import MyPostsContener from "./MyPosts/MyPostsContener";
import ProfileInfo from "./ProfileInfo";
import {Navigate} from "react-router";

const Profile = (props) => {

    return (
        <div className='content'>
         <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContener
            />
        </div>

    );
};

export default Profile;