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

function pow(num1, num2) {
    return Math.pow(num1, num2);
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
            console.log(numberVal);
            display.textContent = numberVal.join('');
        });
    });
}

function initiateEquation() {
    displayText = '';
    equationCounter = 0;
    const display = document.querySelector('#resultDisplay');

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if (equationCounter === 0 && symbol !== '=') {
                // Store the array to num1
                num1 = +numberVal.join('');
                // Store the operator to operator
                symbol = operator.getAttribute('value');
                display.textContent = num1;
                numberVal = [];
                equationCounter++;
            } else if (equationCounter !== 0 && symbol !== '=') {
                num2 = +numberVal.join('');
                // Operate with old symbol and new num
                num1 = operate(num1, num2, symbol);
                display.textContent = num1;
                // Update the symbol
                symbol = operator.getAttribute('value');
                
                // change textContent to display
                numberVal = [];
                equationCounter++;
                // Stop when = is clicked
            }
        });
    });
}

function clearFunction() {
    const display = document.querySelector('#resultDisplay');
    const clear = document.querySelector('#clear');

    clear.addEventListener('click', () => {
        // Reset
        equationCounter = 0;
        display.textContent = '0';
        displayText = '';
        numberVal = [];
    });
}

// function deleteFunction() {
//     const del = document.querySelector('#delete');

//     del.addEventListener('click', () => {
//         numberVal.pop();
//         display.textContent = numberVal.join('');
//         console.log(numberVal);
//         populateDisplay();
//         initiateEquation();
//     })
// }


populateDisplay();
initiateEquation();
clearFunction();
// deleteFunction();
