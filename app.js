var calculation = ''; // Initialize the calculation variable

// Function to update calculation and log it
function updateCalculation(value) {
  calculation += value;
  document.getElementById("calculation-display").innerText = calculation;
  console.log(calculation);

}

// Calculate the result
function calculateResult() {
  try {
    calculation = eval(calculation);
    calculation = Math.round(calculation * 100) / 100; // Round to two decimal places
    document.getElementById('result-display').textContent = calculation;
    console.log(calculation);

  } catch (error) {
    document.getElementById('result-display').innerText = 'Error';
    calculation = '';
    console.log(calculation);

  }
}

//  Clear the display
function clearDisplay() {
  calculation = '';
  document.getElementById("calculation-display").innerText = '';
  document.getElementById('result-display').textContent = '0';
  console.log(calculation);
}

function deleteLastCharacter() {
document.getElementById("result-display").innerText = "0"
document.getElementById("calculation-display").innerText = calculation

calculation = calculation.toString().slice(0, -1); // Remove last character
console.log(calculation);
}
