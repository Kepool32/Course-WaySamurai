import React from 'react';
import Redirect from "../Componets/Redirect/Redirect";
import {connect} from "react-redux";

let withmapStateToProps=(state)=>({


    isAuth: state.auth.isAuth

});

export const withAuthRedirect=(Component)=>{

    class RedirectComponent extends React.Component{
        render() {

            if(this.props.isAuth===false)return <Redirect/>

            return <Component{...this.props}/>
        }
    }
        let AuthRedirectComponent=connect(withmapStateToProps)(RedirectComponent)


    return AuthRedirectComponent;


}