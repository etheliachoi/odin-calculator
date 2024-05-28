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
const decBtn = document.querySelector(".dot");
const pctBtn = document.querySelector(".percent");
const pmBtn = document.querySelector(".pm");

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
    let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
    console.log(result);
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

function clickPercentage() {
    pctBtn.addEventListener("click", () => {
        existing = parseFloat(resultElem.textContent);
        if (Number.isInteger(existing)) {
            let num = existing / 100
            resultElem.textContent = num.toString();
            if (!operator) firstNum = num;
            else secondNum = num;
        }
    })
}

function clickPlusMinus() {
    pmBtn.addEventListener("click", () => {
        let curr = resultElem.textContent
        if (curr === "0") {return}
        if (curr.includes("-")) {
            let positive = curr.replace("-", "");
            resultElem.textContent = positive;
            if (!operator) firstNum = positive;
            else secondNum = positive;
        } else {
            let negative =  "-" + curr
            resultElem.textContent = negative;
            if (!operator) firstNum = negative;
            else secondNum = negative;
        }
    })
}

clickDigit();
clickOperator();
clickEqual();
clickClear();
clickPercentage();
clickPlusMinus();