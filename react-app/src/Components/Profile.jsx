import React from "react";
import MyPostsContainer from "./MyPostsContainer";

const Profile = (props) => {
    return (

        <MyPostsContainer store={props.store}/>

    );
}
export default Profile;