import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, post: 'Post1', date: '13 мар 2022'},
                {id: 2, post: 'Post2Post2Post2Post2Post2Post2Post2Post2', date: '11 фев 2022'},
                {
                    id: 3, post:
                        'Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3',
                    date: '11 мар 2022'
                },
                {id: 4, post: 'Post4Post4', date: '11 мар 2022'},],
            newPostText: '',
        },
        dialogsPage: {
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

            dialogs: [{id: 1, name: 'Andrey'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Katya'},
                {id: 4, name: 'Petya'},
                {id: 5, name: 'Ivan'}],
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}
export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export const sendMessageCreator = () => {
    return {type: 'SEND-MESSAGE'}
}
export const updateNewMessageBody = (text) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: text}
}
export default store;
window.store = store;