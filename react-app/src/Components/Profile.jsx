import React from "react";
import MyPosts from "./MyPosts";

const Profile = (props) => {
    return (

        <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.profilePage.updateNewPostText} dispatch={props.dispatch}/>

    );
}
export default Profile;