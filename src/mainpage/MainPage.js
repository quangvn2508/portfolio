import './MainPage.css';
import { useState } from 'react';

function MainPage() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [focus, setFocus] = useState(false);
    const handleMouseMove = event => {
        setX(event.clientX);
        setY(event.clientY);
        console.log(event.clientX + " " + event.clientY);
    };
    return (
        <div className='h-100 overflow-hidden position-relative'>
            <div className="h-100 d-flex justify-content-center align-items-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {setFocus(false)}}
                onMouseEnter={() => {setFocus(true)}}>
                <div className='w-50 p-3 d-flex flex-column align-items-end'>
                    <div id='first-name'>Vinh Quang,</div>
                    <div id='last-name'>Nguyen</div>
                    <div id='headline'>CS &amp; Math @ Uni of St Andrews</div>
                </div>
                <div className="w-50"></div>
            </div>
            <div
                className={"mouse-bg " + (focus? "focus":"outfocus")}
                style={{left: x, top: y}}/>
        </div>
    );
}

export default MainPage;