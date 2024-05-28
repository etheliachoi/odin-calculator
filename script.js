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
    if (b === 0) {return ":)"}
    return a / b;
}

function operate(operator, a, b) {
    let result;
    if (operator == "+") result = add(a, b);
    else if (operator == "-") result = subtract(a, b);
    else if (operator == "x") result = multiply(a, b);
    else if (operator == "÷") result = divide(a, b);
    return parseFloat(result.toFixed(5));
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
            if (displayElem.textContent === "0") {
                displayElem.textContent = btn.textContent;
            } else {
                displayElem.textContent += btn.textContent;
            }

            if (!operator) {
                if (!firstNum) {
                    firstNum = btn.textContent;
                    resultElem.textContent = btn.textContent;
                } else {
                    firstNum += btn.textContent;
                    resultElem.textContent += btn.textContent;
                }
            } else {
                if (!secondNum) {
                    secondNum = btn.textContent;
                    resultElem.textContent = btn.textContent;
                } else {
                    secondNum += btn.textContent;
                    resultElem.textContent += btn.textContent;
                }
            }
        });
    })
}

function clickOperator(btn) {
    opBtns.forEach(function(btn) {
        btn.addEventListener("click", () => {
            if (firstNum && secondNum) {
                getResult();
            }
            displayElem.textContent += btn.textContent;
            operator = btn.textContent;
        })
    })
}

function getResult() {
    let result = operate(operator, parseInt(firstNum), parseInt(secondNum));
    resultElem.textContent = result;
    firstNum = result, secondNum = null;
}

function clickEqual() {
    eqBtn.addEventListener("click", () => {
        if (operator && secondNum) getResult();
    })
}

function clickClear() {
    clrBtn.addEventListener("click", () => {
        firstNum = null, secondNum = null, operator = null;
        displayElem.textContent = "0";
        resultElem.textContent = "0";
    })
}

clickDigit();
clickOperator();
clickEqual();
clickClear();