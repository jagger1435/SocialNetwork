const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
        {id: 1, message: 'message1', date: '13 мар 2022'},
        {id: 2, message: 'message2message2message2message2message2message2message2', date: '11 фев 2022'},
        {
            id: 3, message:
                'message3message3message3message3message3message3message3message3message3message3message3message3message3',
            date: '11 мар 2022'
        },
        {id: 4, message: 'message4message4message4', date: '11 мар 2022'},
        {id: 5, message: 'message5message5message5message5', date: '11 апр 2022'}],
    newMessageText: '',

    dialogs:
        [{id: 1, name: 'Andrey'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Petya'},
            {id: 5, name: 'Ivan'}],
}

const dialogsReducer = (state =initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: newMessage, date: '27 мар 2022'});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {type: 'SEND-MESSAGE'}
}
export const updateNewMessageBody = (text) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: text}
}
export default dialogsReducer;
