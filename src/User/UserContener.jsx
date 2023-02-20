import React from 'react';
import {connect} from "react-redux";

import {
    follofc, Follow, getUsersThunkCreator,
    setCurrentPageAC, setfollowingInProgressAC,
    setisFetchingAC,
    setTotalPageCountAC,
    setUserAC,
    unfollofc, unFollow
} from "../redax/user-reducer";
import axios from "axios";
import Users from "./Users";
import "./User.css"
import Preloader from "../Componets/commons/Preloader";
import {getUsers, userAPI} from "../Componets/API/api";



class UsersComponent extends React.Component{



    componentDidMount() {


        this.props.getUsers(this.props.currentPage,this.props.pageSize)

   /*     this.props.setisFetching(true)
       userAPI.getUsers(this.props.currentPage,this.props.pageSize).then
        (data => {

                this.props.setisFetching(false)
                this.props.setUser(data.items)
                this.props.setTotalPageCount(data.totalCount)

            }
        );*/
    }

    onPageChange=(p)=>{
        this.props.getUsers(p,this.props.pageSize)
     /*
        this.props.setCurrenPage(p)
        this.props.setisFetching(true)

        userAPI.getDate(p,this.props.pageSize,{

            withCredentials:true
        }).then
        (data => {
                this.props.setisFetching(false)
                this.props.setUser(data.items)

            }
        );*/
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      user={this.props.user}
                      follows={this.props.follows}
                      unfollow={this.props.unfollow}
                     /* isFetching={this.props.isFetching }*/
                      setfollowingInProgress={this.props.setfollowingInProgress}
                      followingInProgress={this.props.followingInProgress}
                        unfollowes={this.props.unfollowes}
                        followses={this.props.followses}
        />
    </>

    }





}

let mapStateToProps=(state)=>{
    return{
        user:state.userPage.user,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage. totalUsersCount,
        currentPage:state.userPage.currentPage,
        isFetching:state.userPage.isFetching,
        followingInProgress:state.userPage.followingInProgress,

    }


}

/*let mapDispatchToProps=(dispatch)=>{
    return{
        follows:(userid)=>{
            dispatch(follofc(userid))

        },
        unfollow:(userid)=>{
            dispatch(unfollofc(userid))

        },
        setUser:(user)=>{
            dispatch(setUserAC(user))

        },
        setCurrenPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))

        },
        setTotalPageCount:(totalCount)=>{
            dispatch(setTotalPageCountAC(totalCount))
        },

        setisFetching:(isFetching)=>{
            dispatch(setisFetchingAC(isFetching))
        }
    }

}*/

const UserContener=connect(mapStateToProps,{

    follows:follofc,


    unfollow:unfollofc,





    setCurrenPage:setCurrentPageAC,




    setfollowingInProgress:setfollowingInProgressAC,

    getUsers:getUsersThunkCreator,

    unfollowes:unFollow,
    followses:Follow

})(UsersComponent);


export default UserContener