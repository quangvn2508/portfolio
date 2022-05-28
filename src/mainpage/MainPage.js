import './MainPage.css';
import { Container, Row, Col } from 'react-bootstrap';

function MainPage() {
    return (
        <div className='h-100 overflow-hidden position-relative'>
            <Container fluid className="h-100 w-100 bg-black">
                <Row md={2} className='h-100'>
                    <Col className='h-100 d-flex flex-column align-items-end justify-content-center'>
                        <div id='first-name'>Vinh Quang,</div>
                        <div id='last-name'>Nguyen</div>
                        <div id='headline'>CS &amp; Maths @ Uni of St Andrews</div>
                    </Col>
                    <Col className="h-100 d-none d-sm-block"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;