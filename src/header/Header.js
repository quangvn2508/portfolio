import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (<>
        <Navbar fixed="top" bg="white" expand="sm" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={process.env.PUBLIC_URL + "/image/CatLogo.jpg"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Vinh Quang Nguyen icon"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} className="cs-nav-item" to="projects">Projects</Nav.Link>
                        <Nav.Link as={Link} className="cs-nav-item" to="competitive_programming">CP</Nav.Link>
                        <Nav.Link as={Link} className="cs-nav-item" to="profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default Header;
