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
let operator;

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

let displayVal = [];

function populateDisplay() {
    const display = document.querySelector('#display');

    const numbers = document.querySelectorAll('.number');
    console.log(numbers);
    numbers.forEach(number => {
        number.addEventListener('click', () => {
        displayVal.push(number.getAttribute('value'));
        display.textContent = displayVal.join('');
    })});
}

function updateDisplayVal() {
    
}

populateDisplay();