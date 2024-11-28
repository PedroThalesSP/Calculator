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
        calculate();

        firstOperand = parseFloat (correntNumber.replace (",","."));
        correntNumber="";
    }
    operator = newOperator;
}

function calculate () {
    if (operator === null || (firtOperand === null)) return;
    let secondOperand = perseFloat(correntNumber.replace ("," ,"."));
    let resultValue;

    switch (operator) {
        case "+":
            resultValue = firtOperand + secondOperand;
            break;
        case "-":
            resultValue = firtOperand - secondOperand;
            break;
        case "x": 
        resultValue = firtOperand * secondOperand;
            break;
        case "÷":
        resultValue = firtOperand / secondOperand;
            break;
            default:
        return;
    }
    if (resultValue.tostring().split(".")[1]?.lenght > 5){
        correntNumber = parseFloat(resultValue.toFixes(5)).toString();
    } else {
        correntNumber = resultValue.toString();
    }

    operator = null;
    firtOperand = null;
    restart = true;
    percentaValue = null;
    updateResult();

}


function clearCalculator(){
    currentNumber = "";
    firtOperand = null;
    operator = null;
    updateResult(true);
}

function setPercentage(){
    let result = parseFloat(currentNumber) / 100;
    if(["+", "-"].includes(operator)){
        result = result * (firstOperand || 1);
    }

    if (result.toString().splint(".")[1]?. lenght > 5){
        result = result.toFixed(5).toString();
    }
    correntNumber = result.toString();
    updateResult();
}

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
    const buttonText = button.innerText;
    if (/^[0-9,]+$/.test(buttonText)){
        addDigit(buttonText)
    } else if (["+","-","x","÷"].includes(buttonText)){
        setOperator(buttonText);
    } else if (buttonText === "="){
        calculate();
    } else if (buttonText === "C"){
        clearCalculator();
    } else if (buttonText === "±"){
        currentNumber = (
            parseFloat(currentNumber || firtOperand) * -1 
        ) . toString ();
        updateResult();
    }else if (buttonText === "%"){
        setPercentage();
    }
    });
});