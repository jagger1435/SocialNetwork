import React from "react";
import DialogItem from "./MyDialog";
import {sendMessageCreator, updateNewMessageBody} from "../redux/state";

const Dialogs = (props) => {
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewChangeMessage = (e) => {
       let message = e.target.value;
         props.dispatch(updateNewMessageBody(message));
    }
    let dialogElements = props.dialogsPage.messages.map(dialog => <DialogItem name={dialog.id} message={dialog.message}
                                                                  date={dialog.date}/>);
    let newMessageBody = props.dialogsPage.newMessageText;
    return (
        <div className="im-page--dialogs _im_page_dialogs page_block">
            <div><textarea value= {newMessageBody} placeholder='Введите сообщение...' onChange={onNewChangeMessage}></textarea></div>
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