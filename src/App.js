import Header from "./header/Header";
import MainPage from "./mainpage/MainPage";
import Footer from "./footer/Footer";
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import CompetitiveProgramming from "./cp/CompetitiveProgramming";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";

function App() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [focus, setFocus] = useState(false);
    const handleMouseMove = event => {
        setX(event.clientX);
        setY(event.clientY);
    };
    const handleTouchMove = event => {
        setX(event.touches[0].clientX);
        setY(event.touches[0].clientY);
    }
    return (
        <Router>
        <div className="position-relative h-100"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {setFocus(false)}}
            onMouseEnter={() => {setFocus(true)}}
            onTouchMove={handleTouchMove}
            onTouchStart={event => {handleTouchMove(event); setFocus(true)}}
            onTouchEnd={() => {setFocus(false)}}>
            <Header/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/competitive_programming" element={<CompetitiveProgramming />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer/>
            <div className="w-100 h-100 mouse-layer">
                <div
                    className={"mouse-bg " + (focus? "focus":"outfocus")}
                    style={{left: x, top: y}}/>
            </div>
        </div>
        </Router>
    );
}

export default App;
