// const input = document.getElementById("input_range");
const button = document.querySelector("button");

button.addEventListener("click", function (){
console.log(button.textContent);
    if(button.textContent == "ON") {
        button.textContent = "OFF";
    } else {
        button.textContent = "ON";
    }
    const letters = document.querySelectorAll("li");
    // for(let i = 0; letters.length > i; i++) {
    //     letters[i].classList.toggle("off");
    // }
    const lettersWithClass = letters.forEach(function(elem) {
        elem.classList.toggle("off");
    });


})



