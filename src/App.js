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
        <div className="App position-relative h-100 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {setFocus(false)}}
            onMouseEnter={() => {setFocus(true)}}
            onTouchMove={handleTouchMove}
            onTouchStart={() => {setFocus(true)}}
            onTouchEnd={() => {setFocus(false)}}>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="competitive_programming" element={<CompetitiveProgramming />} />
            </Routes>
            <Footer/>
            <div
                className={"mouse-bg " + (focus? "focus":"outfocus")}
                style={{left: x, top: y}}/>
        </div>
        </Router>
    );
}

export default App;
