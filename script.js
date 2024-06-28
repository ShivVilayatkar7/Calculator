function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
        clearDisplay();
    }
}

function backspace(){
    const display =  document.getElementById('display');
    display.value = display.value.slice(0, -1);
}