import './MainPage.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
        <div className='h-100 overflow-hidden position-relative'
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {setFocus(false)}}
            onMouseEnter={() => {setFocus(true)}}>
            <Container fluid className="h-100 w-100">
                <Row md={2} className='h-100'>
                    <Col className='h-100 d-flex flex-column align-items-end justify-content-center'>
                        <div id='first-name'>Vinh Quang,</div>
                        <div id='last-name'>Nguyen</div>
                        <div id='headline'>CS &amp; Math @ Uni of St Andrews</div>
                    </Col>
                    <Col className="h-100 d-none d-sm-block"></Col>
                </Row>
            </Container>
            <div
                className={"mouse-bg " + (focus? "focus":"outfocus")}
                style={{left: x, top: y}}/>
        </div>
    );
}

export default MainPage;