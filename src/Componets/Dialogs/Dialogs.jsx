import React from 'react';
import "./Dialogs.css";
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem";
import Message from "./Message";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import StoreContext from "../../StoreContext";

const Dialogs = (props) => {




                let dialogses = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}
                                                                                   amg={d.amg}/>)

                let Messages = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

                let NewMassageBody = props.dialogsPage.newMessageBody

                let onSendMessageClick=()=>{

                    props.sendMessage();
                }
                let onSendMessageChange=(e)=>{

                    let body=e.target.value
                    props.updateNewMessageBody(body)
                    }


                return <div className="dialogs">
                    <div className="dialogs-items">
                        {dialogses}
                    </div>
                    <div className="message">
                        <div>{Messages}</div>
                        <div>

                                <div> <textarea value={NewMassageBody }
                                  onChange={onSendMessageChange}
                                  placeholder="Enter yor messange">
                            </textarea>

                            </div>

                            <div>
                                <button onClick={onSendMessageClick}>Add post</button>
                            </div>

                        </div>
                    </div>

                </div>


};

export default Dialogs;