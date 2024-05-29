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
let lastClickEqual = false;
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
            if (resultElem.textContent === "0" && btn.textContent === "0") {
                return
            }

            if (!operator) {
                if (!firstNum || resultElem.textContent === "0" || lastClickEqual) {
                    firstNum = btn.textContent;
                    resultElem.textContent = btn.textContent;
                    lastClickEqual = false;
                } else {
                    firstNum += btn.textContent;
                    resultElem.textContent += btn.textContent;
                }
            } else {
                if (!secondNum || resultElem.textContent === "0") {
                    secondNum = btn.textContent;
                    resultElem.textContent = btn.textContent;
                } else {
                    secondNum += btn.textContent;
                    resultElem.textContent += btn.textContent;
                }
            }
        });
    })
    clickDecimal();
}

function clickOperator(btn) {
    opBtns.forEach(function(btn) {
        btn.addEventListener("click", () => {
            if (firstNum && secondNum) {
                getResult();
            }
            operator = btn.textContent;
            decBtn.disabled = false;
        })
    })
}

function getResult() {
    let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
    console.log(result);
    resultElem.textContent = result;
    firstNum = result, secondNum = null, operator = null;
}

function clickEqual() {
    eqBtn.addEventListener("click", () => {
        if (operator && secondNum) getResult();
        lastClickEqual = true;
        decBtn.disabled = false;
    })
}

function clickClear() {
    clrBtn.addEventListener("click", () => {
        firstNum = null, secondNum = null, operator = null;
        resultElem.textContent = "0";
        decBtn.disabled = false;
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

function clickDecimal() {
        decBtn.addEventListener("click", () => {
            if (!operator) {
                if (!firstNum || lastClickEqual) {
                    firstNum = "0.";
                    resultElem.textContent = "0."
                    lastClickEqual = false;
                } else {
                    firstNum += ".";
                    resultElem.textContent += "."
                }
            } else if (!secondNum) {
                secondNum = "0.";
                resultElem.textContent = "0.";
            } else {
                secondNum += ".";
                resultElem.textContent += ".";
            }
            decBtn.disabled = true;
        })
    }

clickDigit();
clickOperator();
clickEqual();
clickClear();
clickPercentage();
clickPlusMinus();
// clickDecimal();