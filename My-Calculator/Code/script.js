
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C'){
            currentInput = '';
            operator = '';
            firstValue = '';
            result.value = '';
        } else if (value === '=') {
            if(firstValue && operator && currentInput) {
                result.value = eval(`${firstValue}${operator}${currentInput}`);
                firstValue = result.value;
                currentInput = '';
                operator = '';
            }
        }else if(['+', '-', '*', '/'].includes(value)) {
            if (currentInput){
                firstValue = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            result.value = currentInput;
        }
    });
});