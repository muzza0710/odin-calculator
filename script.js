const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector('.equals')

const screen = document.getElementById("screen");

console.log(digitButtons);
let firstNumber ;
let secondNumber ;
// let firstNumberIsLocked = false;
// let secondNumberIsLocked = false;
let oper = "";
let enterSecondNumber = false;

function calculate(a, b, operator ) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                alert("cant divide by 0!!");
                return a;
            };
            return a / b;

    
    }
}

equalsButton.addEventListener("click", () => {
    console.log("=");
    if (firstNumber && oper){
        firstNumber = calculate(parseInt(firstNumber), parseInt(screen.value), oper);
        screen.value = firstNumber;
        oper = "";
    }
})

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (enterSecondNumber) {
            screen.value = "";
            enterSecondNumber = false;
        }
        screen.value += button.textContent;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (oper){
            firstNumber = calculate(parseInt(firstNumber), parseInt(screen.value), oper)
            console.log(firstNumber)
            screen.value = firstNumber;
        }
        else {firstNumber = parseInt(screen.value);}
        oper = button.textContent;
        console.log(oper);
        enterSecondNumber = true;
    })
})
