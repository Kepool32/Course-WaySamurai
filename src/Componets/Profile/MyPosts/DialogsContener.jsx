import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redax/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";





let mapStateToProps=(state)=>{

    return{
        dialogsPage:state.dialogsReducer
    }
}

let mapDispatchToProps=(dispatch)=>{

    return{
        sendMessage: ()=>
            dispatch(sendMessageCreator()),
        updateNewMessageBody : (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContener=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContener




