const resultNumbers = [];

const randomNumbers = () => {
    if(resultNumbers.length === 6) {
        button.disabled = true;
        return

    } else {
        const rondomNumber = Math.floor(Math.random() * 49 + 1);
        for(let i = 0; i < resultNumbers.length; i++){
            if(rondomNumber === resultNumbers[i]){
                console.log(`ta sama liczba ${randomNumber}`);

                return randomNumbers();
            }
        }

        const divNumber = document.createElement("div");
        // divNumber.textContent = "23";
        // divNumber.textContent = Math.floor(Math.random() * 49 + 1);

        divNumber.textContent = rondomNumber;
        document.body.appendChild(divNumber);
        resultNumbers.push(rondomNumber);
    }

}

const button = document.querySelector('button');
button.addEventListener('click', randomNumbers);

