// Basic math logic
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Operator

let num1;
let num2;
let symbol;

function operate(num1, num2, symbol) {
    switch(symbol) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}

// Store the whole equation
let displayText = '';
let numberVal = [];
let equationCounter = 0;

function populateDisplay() {
    const display = document.querySelector('#resultDisplay');

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            numberVal.push(number.getAttribute('value'));
            display.textContent = numberVal.join('');
        });
    });
}

function initiateEquation() {
    equationCounter = 0;
    const display = document.querySelector('#resultDisplay');

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if (equationCounter === 0) {
                // Store the array to num1
                num1 = +numberVal.join('');
                console.log(num1);
                // Store the operator to operator
                symbol = operator.getAttribute('value');
                console.log(symbol);
                // change textContent to display
                displayText += `${num1} ${symbol} `;
                console.log(displayText);
                display.textContent = displayText;
                numberVal = [];
                equationCounter++;
            } else {
                num2 = +numberVal.join('');
                console.log(num2);
                // Operate with old symbol and new num
                num1 = operate(num1, num2, symbol);
                display.textContent = num1;
                // Operate first then update the symbol
                
                // Store the new symbol
                symbol = operator.getAttribute('value');
                console.log(symbol);
                
                // Display the new symbol in the equation
                displayText += `${num2} ${symbol} `;
                console.log(displayText);

                // change textContent to display
                numberVal = [];
                equationCounter++;
            }
        });
    });
}

function continueEquation() {

}

populateDisplay();
initiateEquation();