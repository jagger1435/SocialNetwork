import React from 'react';
import Dialogs from "./Dialogs";
import Profile from "./Profile";
import {Route, Routes} from "react-router-dom";
import RMenu from "./RMenu";


const PageBody = (props) => {
    return (
        <div id="page_body" className="fl_r">
            <div className="wide_column_left">
                <RMenu/>
                <div className="wide_column ">
                    <div className="page_block">
                        <Routes>
                            <Route path="/profile" element={<Profile profilePage ={props.profilePage} dispatch = {props.dispatch}/>}/>
                            {/*<Route path="/news" element={<News/>} />*/}
                            <Route path="/dialogs" element={<Dialogs dialogsPage={props.dialogsPage} dispatch = {props.dispatch}/>}/>
                            {/*<Route path="/friends" element={<Friends/>} />*/}
                            {/*<Route path="/groups" element={<Groups/>} />*/}
                            {/*<Route path="/foto" element={<Foto/>} />*/}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageBody;