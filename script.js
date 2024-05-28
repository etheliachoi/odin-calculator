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
    if (operator == "+") return add(a, b);
    else if (operator == "-") return subtract(a, b);
    else if (operator == "x") return multiply(a, b);
    else if (operator == "÷") return divide(a, b);
}

let firstNum = null;
let secondNum = null;
let operator = null;
const displayElem = document.querySelector("#display");
const resultElem = document.querySelector("#result");
const digitBtns = document.querySelectorAll(".digit");
const opBtns = document.querySelectorAll(".operator");
const eqBtn = document.querySelector(".equal");
const clrBtn = document.querySelector(".clear");

function clickDigit(btn) {
    // operator is null
    digitBtns.forEach(function(btn) {
        btn.addEventListener("click", () => {
            displayElem.textContent += btn.textContent;
            if (!operator) {
                if (!firstNum) firstNum = btn.textContent;
                else firstNum += btn.textContent;
            } else {
                if (!secondNum) secondNum = btn.textContent;
                else {
                    secondNum += btn.textContent;
                }
            }
        });
    })
}

function clickOperator(btn) {
    opBtns.forEach(function(btn) {
        btn.addEventListener("click", () => {
            displayElem.textContent += btn.textContent;
            operator = btn.textContent;
            disableOps();
        })
    })
}

function disableOps() {
    opBtns.forEach((btn) => btn.disabled = true);
}

function enableOps() {
    opBtns.forEach((btn) => btn.disabled = false);
}

clickDigit();
clickOperator();
clickEqual();
clickClear();

function clickEqual() {
    eqBtn.addEventListener("click", () => {
        let resultInt = operate(operator, parseInt(firstNum), parseInt(secondNum));
        resultElem.textContent = resultInt.toString();
        // firstNum, secondNum = resultInt, null;
        enableOps();
    })
}

function clickClear() {
    clrBtn.addEventListener("click", () => {
        firstNum = null;
        secondNum = null;
        operator = null;
        displayElem.textContent = null;
        enableOps();
    })
}