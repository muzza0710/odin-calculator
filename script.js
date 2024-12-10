const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

const screen = document.getElementById("screen");
const output = document.querySelector(".output");

let firstNumber ;
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

clearButton.addEventListener("click", () => {
    firstNumber = "";
    oper = "";
    screen.value = "";
    output.textContent = "";
})

equalsButton.addEventListener("click", () => {
    if (firstNumber && oper){
        firstNumber = calculate(parseInt(firstNumber), parseInt(screen.value), oper);
        screen.value = firstNumber;
        oper = "";
        output.textContent = firstNumber;
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
            screen.value = "";
            oper = "";
        }
        else {firstNumber = parseInt(screen.value);}
        oper = button.textContent;
        output.textContent = firstNumber + oper;
        enterSecondNumber = true;
    })
})
