let active = false;

const draw = (e) => {
    if(active == false) return;

    const x = e.clientX;
    const y = e.clientY;
    const point = document.createElement("div");;
    point.style.top = y + "px";
    point.style.left = x + "px";
    document.body.appendChild(point);
}

const drawActive = () => active = !active;

document.body.addEventListener("mousemove", draw);
document.body.addEventListener("mousedown", drawActive);
document.body.addEventListener("mouseup", drawActive);