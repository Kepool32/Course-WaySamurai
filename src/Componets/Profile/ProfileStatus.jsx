import React from 'react';
import {getupdate} from "../../redax/profilepage-reducer";

class ProfileStatus extends React.Component  {






    state={
        editMode:false,
        status:this.props.status,


    }
    activateEditMode=()=> {
        this.setState({

            editMode:true
        })


    }
    dectivateEditMode(){
        this.setState({

            editMode: false
        })
        this.props.updateStatus(this.state.status);

    }


    onStatusChange=(e)=>{

        this.setState({

            status:e.currentTarget.value
        });

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status!==this.props.status){
           this.setState({
               status:this.props.status

           });

       }

    }

    render() {


        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  onChange={this.onStatusChange} ref={this.statusInputRef} autoFocus={true} onBlur={this.dectivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;