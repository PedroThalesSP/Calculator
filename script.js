const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firtOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false){
    result.innerText = originClear ? 0 : currentNumber.replace ("." , ",");
}

function addDigit(digit){
    if (digit === "," && (currentNumber.includes(",") || !correntNumber)) return;


if (restart) {
    correntNumber = digit;
    restart = false;
} else {
    currentNumber += digit;
}

updateResult();
}

function setOperator(newOperator){
    if (correntNumber) {
        calculator();

        firstOperand = parseFloat (correntNumber.replace (",","."));
        correntNumber="";
    }
    operator = newOperator;
}

function calculate () {
    if (operator === null || parseFloat (firtOperand === null)) return;
    let secondOperand = perseFloat(correntNumber.replace ("," ,"."));
    let resultValue;

    switch (operator) {
        case "x":
            resultValue = firtOperand + secondOperand;
            break;
        case "-":
            resultValue = firtOperand - secondOperand;
            break;
        case "x": 
        resultValue = firtOperand * secondOperand;
            break;
        case "/":
        resultValue = firtOperand / secondOperand;
            break;
        return;
    }

}

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
    const buttonText = button.innerText;
    if (/^[0-9,]+$/.test(buttonText)){
        addDigit(buttonText)
    } else if (["+","-","x","÷"].includes(buttonText)){
        setOperator(buttonText);
    }
    });
})