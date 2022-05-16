import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css'

function Footer(props) {
    const [percentage, setPercentage] = useState(50);
    const [percentageHeight, setPercentageHeight] = useState(100);
    const drawWave = (deltaX, deltaY) => {
        setPercentage(50 - 30 * Math.atan(-deltaX/deltaY));
        setPercentageHeight(100 - 40 * Math.abs(Math.atan(deltaX/deltaY)))
    }
    useEffect(() => {
        const deltaX = props.clientX - window.innerWidth/2;
        const deltaY = window.innerHeight - props.clientY;
        drawWave(deltaX, deltaY);
    }, [props.clientX, props.clientY]);

    const contact_details = {
        "email": "mailto:quangvn2508@gmail.com",
        "github": "https://github.com/quangvn2508",
        "linkedin": "https://www.linkedin.com/in/vinh-quang-nguyen/"
    };
    return (
            <div id="footer"
                onMouseLeave={() => drawWave(0, 1)}
                onTouchEnd={() => drawWave(0, 1)}
                onClick={() => drawWave(0, 1)}>
                <div id='footer-trigger' className='d-flex justify-content-left align-items-end'>
                    <svg viewBox="0 0 100 100" className='position-absolute' preserveAspectRatio="none"
                        width={percentage + "%"}
                        height={percentageHeight + "%"}
                        style={{left: 0}}>
                        <path d="M 0 100 q 100 -195 200 0 Z" fill="#000" />
                    </svg>
                    <svg viewBox="100 0 100 100" className='position-absolute' preserveAspectRatio="none"
                        width={(101 - percentage) + "%"}
                        height={percentageHeight + "%"}
                        style={{right: 0}}>
                        <path d="M 0 100 q 100 -195 200 0 Z" fill="#000" />
                    </svg>
                </div>

                <div id='contact-details' className='d-flex justify-content-left align-items-center ps-5'>
                    {Object.keys(contact_details).map((type) => {
                        return (<Button
                            key={type}
                            className='ms-2 me-2 contact-button'
                            variant="outline-black"
                            href={contact_details[type]}
                            target="_blank"
                            ><img
                                src={process.env.PUBLIC_URL + `/${type}.png`}
                                width="30"
                                height="30"
                                alt={`${type} contact icon`}
                        /></Button>);
                    })}
                </div>
            </div>
    );
}

export default Footer;