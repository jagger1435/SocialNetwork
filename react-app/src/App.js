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
                <PageBody store = {props.store}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
