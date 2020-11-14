

const divCircle = document.querySelector('.circle');
const divInfo = document.querySelector('.info')

const moveCircle = (e) => {
    // console.log(e.keyCode);
    // console.log(e);
    // 37 - arrow left
    divInfo.textContent = `wartosc x: ${divCircle.offsetLeft}, wartosc y: ${divCircle.offsetTop}`
    switch(e.keyCode) {
        case 37:
            divCircle.style.left = divCircle.offsetLeft - 15 + "px";
            break;
        case 38:
            divCircle.style.top = divCircle.offsetTop - 15 + "px";
            break;
        case 39:
            divCircle.style.left = divCircle.offsetLeft + 15 + "px";
            break;
        case 40:
            divCircle.style.top = divCircle.offsetTop + 15 + "px";
            break;
        // spacja - 32
        case 32:
            const red = Math.floor(Math.random()*256); // 0-255 //
            const green = Math.floor(Math.random()*256); // 0-255 //
            const blue = Math.floor(Math.random()*256); // 0-255 //
            divCircle.style.backgroundColor = `rgb(${red},${green},${blue})`;
            divInfo.textContent = `Kolor: rgb(${red},${green},${blue})`;
            divInfo.style.border = `5px solid rgb(${red},${green},${blue})`;
            break;
        default:
            divInfo.textContent = "Inny przycisk";

    }


}

 window.addEventListener('keydown', moveCircle);;