const result = document.getElementById('result');

// Append value to display
function append(value) {
    result.value += value;
}

// Clear all
function clearAll() {
    result.value = '';
}

// Delete last character
function backspace() {
    result.value = result.value.slice(0, -1);
}

// Calculate expression safely
function calculate() {
    try {
        // Prevent eval injection by allowing only numbers/operators
        if (/^[0-9+\-*/%.]+$/.test(result.value)) {
            result.value = eval(result.value);
        } else {
            result.value = "Error";
        }
    } catch {
        result.value = "Error";
    }
}

function absolute(){
    if (result.value >= 0) {
       result.value = eval(result.value);
    }
    else if (result.value < 0) {
        result.value = eval(result.value);
    }

}
