let calculation = ''; // Declare calculation variable

// Function to update calculation and log it
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
}




  calculation = eval(calculation);
  console.log(calculation);

 
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

   modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
 });
