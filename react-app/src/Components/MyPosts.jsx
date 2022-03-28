import React from "react";
import Ava from "../ava.jpg";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../redux/state";

const MyPost = (props) => {
    let PostElements = props.posts.map(post => <PostItem name={post.id} post={post.post} date={post.date}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (

        <div className="im-page--dialogs _im_page_dialogs page_block">
            <div>МОИ ПОСТЫ</div>
            <ul id="im_dialogs" className="im-page--dcontent ui_clean_list _im_page_dcontent">
                <div><textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Добавить запись</button>
                </div>
                {PostElements}
            </ul>
        </div>
    );
}

const PostItem = (props) => {
    return (
        <li data-list-id="97458749" className="nim-dialog _im_dialog _im_dialog_97458749 nim-dialog_classic"
            data-peer="97458749" data-msgid="66980">
            <div className="nim-dialog--photo">
                <div className="nim-peer _online _im_peer_online">
                    <div className="nim-peer--photo-w">
                        <div className="nim-peer--photo _im_dialog_photo"><a href=""
                                                                             className="_im_peer_target _online_reader"
                                                                             target="_blank">
                            <div className="im_grid"><img alt="avatar"
                                                          src={Ava}
                                                          width="50" height="50"/></div>
                        </a></div>
                    </div>
                </div>
            </div>
            <div className="nim-dialog--content">
                <div className="nim-dialog--cw"><span role="link" className="blind_label"
                                                      aria-label="Перейти к беседе: Наталі Краснюк"></span>
                    <div className="nim-dialog--date_wrapper">
                        <div className="nim-dialog--date _im_dialog_date">{props.date}</div>
                    </div>
                    <div className="_im_dialog_title" title="">
                        <div className="nim-dialog--name"><span className="nim-dialog--name-w _im_dialog_name_w"
                                                                aria-hidden="true"> <span
                            className="_im_dialog_link">{props.name}</span> </span> <span
                            className="nim-dialog--casper _im_dialog_casper" aria-label="Фантом-чат"
                            role="img"></span> <span className="nim-dialog--donut _im_dialog_donut"></span>

                            <div className="nim-dialog--peer-tags _im_dialog_peer_tags PeerTags"></div>
                        </div>
                        <div className="nim-dialog--text-preview">
                            <span className="nim-dialog--preview _dialog_body"
                                  tabIndex="0">{props.post}</span>
                            <span className="nim-dialog--typing _im_dialog_typing"></span>
                            <span className="nim-dialog--typer-el"></span></div>
                    </div>
                </div>
            </div>
        </li>)
}
export default MyPost;