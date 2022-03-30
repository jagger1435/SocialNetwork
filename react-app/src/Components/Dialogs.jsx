import React from "react";
import DialogItem from "./MyDialog";
import {sendMessageCreator, updateNewMessageBody} from "../redux/dialogs-reducer";

const Dialogs = (props) => {
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewChangeMessage = (e) => {
       let message = e.target.value;
         props.updateNewMessageBody(message);
    }
    let dialogElements = props.state.messages.map(dialog => <DialogItem name={dialog.id} message={dialog.message}
                                                                  date={dialog.date}/>);
    let newMessageBody = props.state.newMessageText;

    return (
        <div className="im-page--dialogs _im_page_dialogs page_block">
            <div><textarea value= {props.newMessageBody} placeholder='Введите сообщение...' onChange={onNewChangeMessage}></textarea></div>
            <div>
                <button onClick={onSendMessageClick}>Отправить</button>
            </div>
            <ul id="im_dialogs" className="im-page--dcontent ui_clean_list _im_page_dcontent">
                {dialogElements}
            </ul>
        </div>
    );
}

export default Dialogs;