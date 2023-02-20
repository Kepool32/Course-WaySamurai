import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserDate, setUserDate} from "../../redax/auth-reducer";
import {userAPI} from "../API/api";
import Redirect from "../Redirect/Redirect";




class HeaderContener extends React.Component  {

    componentDidMount() {

      /*  let userId=this.props.router.params.userid
        if(!userId){
            userId=2
        }*/

        this.props.getAuthUserDate()






    }



    render() {

        return (
            <Header{...this.props}/>
        );
    }
};


let mapStateToProps=(state)=>({

    isAuth: state.auth.isAuth,
    login:state.auth.login,

});
export default connect(mapStateToProps,{getAuthUserDate})(HeaderContener);