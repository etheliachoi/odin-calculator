function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") add(a, b);
    else if (operator == "-") subtract(a, b);
    else if (operator == "x") multiply(a, b);
    else if (operator == "÷") divide(a, b);
}

let firstNum;
let secondNum;
let operator;
const displayElem = document.querySelector("#display");
const digitBtns = document.querySelectorAll(".digit");
const clear = document.querySelector(".clear");

function updateDisplay() {
    digitBtns.forEach(function(btn) {
        btn.addEventListener("click", () => displayElem.textContent = btn.textContent);
    })
}
updateDisplay();