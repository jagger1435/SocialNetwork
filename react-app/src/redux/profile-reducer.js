const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, post: 'Post1', date: '13 мар 2022'},
        {id: 2, post: 'Post2Post2Post2Post2Post2Post2Post2Post2', date: '11 фев 2022'},
        {
            id: 3, post:
                'Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3Post3',
            date: '11 мар 2022'
        },
        {id: 4, post: 'Post4Post4', date: '11 мар 2022'},],
    newPostText: '',
}
const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, post: state.newPostText, date: '13 мар 2022',};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export default profileReducer;