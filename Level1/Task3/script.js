// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

let string = "";
        let memory = 0;

        function calculateResult() {
            // This function evaluates the current expression and returns the result
            return Function('"use strict";return (' + string + ')')();
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
                // Clear everything, including memory
                string = "0";
                memory = 0;
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