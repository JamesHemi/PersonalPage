let expression = '';

function press(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        expression = eval(expression);
        document.getElementById('display').value = expression;
        expression = '';
    } catch {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
