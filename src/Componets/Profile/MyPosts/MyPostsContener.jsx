import React from 'react';
import {addPost, updateNewPostTextActionCreator} from "../../../redax/profilepage-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


const MapStateToProps=(state)=>{


    return{

        post:state.profilepageReducer.post,
        NewPostText:state.profilepageReducer.NewPostText,
    }



}

const mapDispatchToProps=(dispatch)=> {
    return {
        updatepost: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addpost: () => {

            dispatch(addPost())
        }

    }
}

const MypostsContener=connect(MapStateToProps,mapDispatchToProps)(Myposts);

export default MypostsContener;
