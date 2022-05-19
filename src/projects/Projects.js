import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './project.css'

function Projects() {
    const [data, setData] = useState([]);
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
        <div className='w-100 h-100' style={{overflowY: "scroll"}}>
            <div className="mt-5 mb-5 pt-5 container">
                <h2>Projects</h2>
                {data.map(project => {
                    return (
                    <div key={project["name"]} className="w-100 project-card">
                        <div className='project-links'>
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
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;