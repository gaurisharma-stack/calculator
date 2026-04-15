let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        // Handle number and decimal inputs
        if (value >= '0' && value <= '9' || value === '.') {
            expression += value;
            display.value = expression;
        }
        // Handle operators
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (expression !== '') {
                expression += value;
                display.value = expression;
            }
        }
        // Handle equals
        else if (value === '=') {
            try {
                let result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        }
        // Handle AC (All Clear)
        else if (value === 'AC') {
            expression = '';
            display.value = '';
        }
    });
});
