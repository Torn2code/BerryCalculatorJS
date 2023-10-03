var calculation = ''; // Initialize the calculation variable

// Function to update calculation and log it
function updateCalculation(value) {
  calculation += value;
  document.getElementById("calculation-display").innerText = calculation;
}

// Function to calculate the result
function calculateResult() {
  try {
    calculation = eval(calculation);
    calculation = Math.round(calculation * 100) / 100; // Round to two decimal places
    document.getElementById('result-display').textContent = calculation;
  } catch (error) {
    document.getElementById('result-display').innerText = 'Error';
    calculation = '';
  }
}

// Function to clear the display
function clearDisplay() {
  calculation = '';
  document.getElementById("calculation-display").innerText = '';
  document.getElementById('result-display').textContent = '0';
}
