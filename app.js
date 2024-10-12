function getValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}