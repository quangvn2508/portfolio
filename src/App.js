import Header from "./header/Header";
import MainPage from "./mainpage/MainPage";
import Footer from "./footer/Footer";
import { useState } from 'react';

function App() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [focus, setFocus] = useState(false);
    const handleMouseMove = event => {
        setX(event.clientX);
        setY(event.clientY);
    };
    return (
        <div className="App position-relative h-100 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {setFocus(false)}}
            onMouseEnter={() => {setFocus(true)}}>
            <Header/>
            <MainPage/>
            <Footer/>
            <div
                className={"mouse-bg " + (focus? "focus":"outfocus")}
                style={{left: x, top: y}}/>
        </div>
    );
}

export default App;
