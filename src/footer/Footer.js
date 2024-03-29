import { Button } from 'react-bootstrap';
import './Footer.css'

const contact_details = {
    "email": "mailto:quangvn2508@gmail.com",
    "github": "https://github.com/quangvn2508",
    "linkedin": "https://www.linkedin.com/in/vinh-quang-nguyen/",
    "cv": "https://github.com/quangvn2508/CV/blob/master/aux/main.pdf"
};

function Footer() {
    return (
            <div id='contact-details' className='d-flex justify-content-left align-items-center ps-5 bg-black'>
                {Object.keys(contact_details).map((type) => {
                    return (<Button
                        key={type}
                        className='ms-2 me-2 contact-button'
                        variant="outline-black"
                        href={contact_details[type]}
                        target="_blank"
                        ><img
                            src={process.env.PUBLIC_URL + `image/${type}.png`}
                            width="30"
                            height="30"
                            alt={`${type} contact details for Vinh Quang Nguyen`}
                    /></Button>);
                })}
            </div>
    );
}

export default Footer;