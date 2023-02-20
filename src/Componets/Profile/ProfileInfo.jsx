import React from 'react';
import Preloader from "../commons/Preloader";
import "./Profile.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://kartinkin.net/uploads/posts/2020-10/1601579793_10-p-kizaru-art-kartinki-foto-31.jpg"/>
            </div>

            <div className="profilic">

                <img src={props.profile.photos.large}/>

            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;