import './vkst.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./Components/Heder/Header";
import Sidebar from "./Components/Sidebar";
import PageBody from "./Components/PageBody";
import React from "react";


function App(props) {
    return (
        <BrowserRouter>
        <div className="new_header_design">
            <Header/>
            <div id="page_layout">
                <Sidebar/>
                <PageBody dialogsPage = {props.appState.dialogsPage} profilePage = {props.appState.profilePage}  dispatch = {props.dispatch}  />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
