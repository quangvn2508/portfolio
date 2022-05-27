import { Accordion, Badge, Container, Button } from "react-bootstrap";
import "./profile.css";

const moduleList = [
    "Constraint Programming",
    "Differential Equations",
    "Operating Systems",
    "Distributed Systems",
    "Fractal Geometry",
    "Number Theory",
    "Complex Analysis",
    "Linear Mathematics ",
    "Algebra: Rings and Fields",
    "Computational Complexity",
    "Groups",
    "Combinatorics and Probability",
    "Foundations of Computation",
    "Multivariate Calculus",
    "Abstract Algebra",
    "Computer Systems"
];

const sta_links = {
    "Uni.": "https://www.st-andrews.ac.uk/"
}

const rossall_links = {
    "School\'s page": "https://rossall.org.uk/"
}

function Profile() {
    return (
        <Container id="profile-page" className="pt-5 pb-5">
            <h2 className="mt-5">Education</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>University of St Andrews</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>One of 18 students eligible for direct entry into second year</li>
                            <li><b>First Class (Deans' List 2019-2022)</b> in all years</li>
                            <li>Average 17.1/20</li>
                        </ul>
                        <h6>Modules:</h6>
                        {moduleList.map(_module => {
                            return <Badge className="m-1" text="dark" bg="light">{_module}</Badge>
                        })}
                        <h6>Others:</h6>
                        {Object.keys(sta_links).map(tag => {
                            return <Button
                                href={sta_links[tag]}
                                target="_blank"
                                className="m-1"
                                variant="outline-secondary"
                                size="sm">{tag}</Button>
                        })}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Rossall school</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>18 months A-level course</li>
                        </ul>
                        <h6>Subjects:</h6>
                        <ul>
                            <li>Mathematics (A*)</li>
                            <li>Further Mathematics (A*)</li>
                            <li>Physics (A*)</li>
                            <li>Computer Science (A)</li>
                        </ul>
                        <h6>Others:</h6>
                        {Object.keys(rossall_links).map(tag => {
                            return <Button
                                href={rossall_links[tag]}
                                target="_blank"
                                className="m-1"
                                variant="outline-secondary"
                                size="sm">{tag}</Button>
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2 className="mt-5">Work Experience</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Webex, Cisco</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>FPT Software</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>CPSTA</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>);
}

export default Profile;