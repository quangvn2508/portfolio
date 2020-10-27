
// Add event listener
const decor = document.querySelector(".decor");
const card = document.getElementById("card");
document.addEventListener("mousemove", parallax);
// Magic happens here
function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let _delta1 = `${-Math.floor((_mouseX - _w) * 0.05)}px`;
    let _delta2 = `${-Math.floor((_mouseY - _h) * 0.05)}px`;
    let x = `${_delta1}, ${_delta2}`;
    decor.style.transform = "translate(" + _delta1 + "," + _delta2 + ")";
}

document.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        card.classList.remove("expand-card");
        card.classList.add("collapse-card");
        document.removeEventListener("mousemove", parallax);
        decor.style.transform = "";
    } else {
        document.addEventListener("mousemove", parallax);
        card.classList.remove("collapse-card");
        card.classList.add("expand-card");
    }
}, false);