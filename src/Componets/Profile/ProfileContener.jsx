import React from 'react';
import MyPostsContener from "./MyPosts/MyPostsContener";
import ProfileInfo from "./ProfileInfo";
import "./Profile.css"
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getupdate, getUserProfile, setUserProfile} from "../../redax/profilepage-reducer";



import {useLocation,
 useParams,
} from "react-router-dom";
import {userAPI} from "../API/api";
import Redirect from "../Redirect/Redirect";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location,  params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContener extends React.Component{





    componentDidMount() {

        let userId=this.props.router.params.userid
        if(!userId){
            userId=2
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }


    render() {

       /* if(this.props.isAuth===false)return <Redirect/>*/


        return (
       <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateStatus={this.props.getupdate}/>
        );
    }
};

/*let AuthRedirectComponent=withAuthRedirect(ProfileContener)*/




let mapStateToProps=(state)=>({

        profile:state.profilepageReducer.profile,
        status:state.profilepageReducer.status,


});

/*let withURLDataContenerComponent = withRouter(AuthRedirectComponent)*/


export default compose(
    connect(mapStateToProps,{getUserProfile,getStatus,getupdate}),
            withRouter,
    withAuthRedirect,

)(ProfileContener)

/*export default connect(mapStateToProps,{getUserProfile})(withURLDataContenerComponent);*/