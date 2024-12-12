const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');
const posNegButton = document.querySelector(".pos-neg");
const periodButton = document.querySelector(".period");
const backspaceButton = document.querySelector(".backpace");

const screen = document.getElementById("screen");
const output = document.querySelector(".output");

let firstNumber;
let secondNumber;
let oper = "";
let outputString = "";
let enterFirstNumber = true;
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
    secondNumber =""
    oper = "";
    screen.value = "";
    output.textContent = "";
    enterSecondNumber =false;
    enterFirstNumber = true;
})

equalsButton.addEventListener("click", () => {
    if (firstNumber && oper && screen.value){
        secondNumber = parseFloat(screen.value);
        output.textContent = firstNumber + oper + secondNumber;
        firstNumber = calculate(parseFloat(firstNumber), secondNumber, oper);
        screen.value = firstNumber;
        oper = "";
        secondNumber = "";
        enterSecondNumber = false;
        enterFirstNumber = true;
    }
})

periodButton.addEventListener("click", () => {
    if (enterSecondNumber || enterFirstNumber) {
        screen.value = "";
        enterSecondNumber = false;
        enterFirstNumber = false;
        screen.value += "0.";
    } else if (!screen.value.includes(".")){
        screen.value += ".";
    } 
    
})

posNegButton.addEventListener("click", () => {
    let num = parseFloat(screen.value);
    if (num) {
    num *= -1;
    screen.value = num;
    } else {
        screen.value = "-";
        if (enterFirstNumber){enterFirstNumber = false}
        if (enterSecondNumber){enterSecondNumber = false}

    }


})

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (enterSecondNumber || enterFirstNumber) {
            screen.value = "";
            enterSecondNumber = false;
            enterFirstNumber = false;
        }
        screen.value += button.textContent;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (oper && screen.value){
            secondNumber = parseFloat(screen.value);
            firstNumber = calculate(parseFloat(firstNumber), secondNumber, oper)
            screen.value = "";
            oper = "";
        } else if (screen.value){firstNumber = parseFloat(screen.value);}
        oper = button.textContent;
        output.textContent = firstNumber + oper;
        screen.value = "";
        enterSecondNumber = true;
    })
})

