import Header from "./views/common/Header.jsx";
import Home from "./views/Home.jsx";
import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Detail from "./views/Detail.jsx";
import Profile from "./views/Profile.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/image/:imageId/details" element={ <Detail/> }/>
                <Route path="/profile" element={ <Profile/> }/>
            </Routes>
        </>
    )
}

export default App
