const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const dialogsReducer = (state, action) => {
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
export default dialogsReducer;
