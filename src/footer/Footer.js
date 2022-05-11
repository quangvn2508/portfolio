import { useState } from 'react';
import './Footer.css'
function Footer() {
    const [detailPos, setPos] = useState(0);
    const drawWave = (deltaX, deltaY) => {
        const canvas = document.getElementById("footer-trigger");
        var ctx = canvas.getContext("2d");

        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const pos = w/2 + (w/5) * Math.atan(deltaX/deltaY);
        const tide = Math.abs((h/5) * Math.atan(deltaX/deltaY));

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
    const handleMouseMove = event => {
        const footer = document.getElementById("footer");
        const deltaX = event.clientX - footer.offsetWidth/2;
        const deltaY = footer.offsetHeight - event.clientY;
        drawWave(deltaX, deltaY);
    };
    return (
            <div id="footer"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => drawWave(0, 1)}
                onLoad={() => drawWave(0, 1)}>
                <canvas
                    id="footer-trigger"
                    style={{ border: "1px solid #d3d3d3" }}
                    onMouseEnter={() => setPos(100)}
                >
                </canvas>
                <div id='contact-details'
                    onMouseLeave={() => setPos(0)}
                    style={{transform: `translate(0, -${detailPos}%)`}}>
                </div>
            </div>
    );
}

export default Footer;