import { Button } from 'react-bootstrap';
import './Footer.css'

function Footer() {
    const drawWave = (deltaX, deltaY) => {
        const canvas = document.getElementById("footer-trigger");
        var ctx = canvas.getContext("2d");

        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const pos = w/2 + (w/5) * Math.atan(deltaX/deltaY);
        const tide = Math.abs((h/4) * Math.atan(deltaX/deltaY));

        ctx.moveTo(0, h);
        for (let i = 0; i <= pos; i+=10)
            ctx.lineTo(i, (h + 5) - (h-tide) * Math.sin((i * Math.PI)/(2 * pos)));
        for (let i = pos; i <= w; i+=10)
            ctx.lineTo(i, (h + 5) - (h-tide) * Math.sin(((w-i) * Math.PI)/(2 * (w - pos))));
        ctx.lineTo(0, h);
        ctx.stroke();
        ctx.fillStyle = "#000000";
        ctx.fill();
    }
    const handleMove = (clientX, clientY) => {
        const footer = document.getElementById("footer");
        const deltaX = clientX - footer.offsetWidth/2;
        const deltaY = footer.offsetHeight - clientY;
        drawWave(deltaX, deltaY);
    }
    const handleMouseMove = event => {
        handleMove(event.clientX, event.clientY);
    }
    const handleTouchMove = event => {
        handleMove(event.touches[0].clientX, event.touches[0].clientY);
    };
    const contact_details = {
        "email": "mailto:quangvn2508@gmail.com",
        "github": "https://github.com/quangvn2508",
        "linkedin": "https://www.linkedin.com/in/vinh-quang-nguyen/"
    };
    return (
            <div id="footer"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => drawWave(0, 1)}
                onLoad={() => drawWave(0, 1)}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => drawWave(0, 1)}>
                <canvas
                    id="footer-trigger"
                    style={{ border: "1px solid #d3d3d3" }}>
                </canvas>
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