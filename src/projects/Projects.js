import { useState, useEffect } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import './project.css'

function Projects() {
    const [data, setData] = useState([]);
    const [topCard, setTopCard] = useState(-1);
    useEffect(() => {
        fetch('json/projects.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
        .then(function(response){
            return response.json();
        })
        .then(function(_data) {
            setData(_data);
        });
    }, []);
    return (
        <div className='w-100 bg-black'>
            <Container className="mt-5 pb-5 pt-5">
                <h2 className='text-white'>Projects</h2>
                <Row>
                {data.map((project, index) => {
                    return (
                    <Col xs={12} md={6} key={project["name"]} className="project-card" style={{zIndex: (topCard === index? "1" : "0")}}
                        onMouseEnter={() => setTopCard(index)}>
                        <div className='project-links bg-dark'>
                            <div>
                                {Object.keys(project["links"]).map(link_type => {
                                    return (
                                        <Button key={link_type}
                                            variant="outline-black"
                                            href={project.links[link_type]}
                                            target="_blank"
                                            ><img
                                                src={process.env.PUBLIC_URL + `image/${link_type}.png`}
                                                width="30" height="30"
                                                alt={`Project ${project["name"]}'s reference link to ${link_type}`}
                                        /></Button>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + `image/${project["background"]}`})`}}
                            className="project-card-background d-flex flex-column justify-content-center align-items-center">
                            <p className='project-name'>{project["name"]}</p>
                            <p className='project-description'>{project["description"]}</p>
                        </div>
                    </Col>
                    );
                })}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;