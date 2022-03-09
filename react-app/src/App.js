import './vkst.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PageBody from "./Components/PageBody";

function App() {
    return (
        <div className="new_header_design">
            <Header/>
            <div id="page_layout">
                <Sidebar/>
                <PageBody/>
            </div>
        </div>
    );
}

export default App;
