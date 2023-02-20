import React from 'react';
import "./Dialogs.css";
const Message = (props) => {
    return (
        <div >
            <div className="messages">{props.message}</div>

        </div>
    );
};

export default Message;