import React from "react";
import {sendMessageCreator, updateNewMessageBody} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewChangeMessage = (message) => {
        props.store.dispatch(updateNewMessageBody(message));
    }

    let newMessageBody = state.newMessageText;
    return (
        <Dialogs sendMessage={onSendMessageClick} newMessageBody ={newMessageBody} updateNewMessageBody={onNewChangeMessage} state={state}/>
    );
}

export default DialogsContainer;