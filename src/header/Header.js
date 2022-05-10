import { Navbar, Nav, Container } from "react-bootstrap";
import './Header.css';

function Header() {
    return (<>
        <Navbar fixed="top" bg="white" expand="md" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={process.env.PUBLIC_URL + "/CatLogo.jpg"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Vinh Quang Nguyen icon"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="cs-nav-item" href="#">Project</Nav.Link>
                        <Nav.Link className="cs-nav-item" href="#">Competitive Programming</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default Header;
