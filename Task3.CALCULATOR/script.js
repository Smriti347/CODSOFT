let string = "";
let memory = 0;

function calculateResult() {
    try {
        // This function evaluates the current expression and returns the result
        return Function('"use strict";return (' + string + ')')();
    } catch (error) {
        return "Error";
    }
}

function updateDisplay(value) {
    // This function updates the calculator's display
    document.querySelector('input').value = value;
}

function handleButtonClick(e) {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
        // Calculate the result and update the display
        const result = calculateResult();
        string = result.toString();
        updateDisplay(string);
    } else if (buttonValue === 'AC') {
        // If AC is pressed after '=' or 'M+' or 'M-', just clear the display
        string = "";
        updateDisplay(string);
    } else if (buttonValue === 'M+') {
        // Add the current result to memory
        const result = calculateResult();
        memory += result;
    } else if (buttonValue === 'M-') {
        // Subtract the current result from memory
        const result = calculateResult();
        memory -= result;
    } else {
        // Append the button value to the current expression and update the display
        string += buttonValue;
        updateDisplay(string);
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});
