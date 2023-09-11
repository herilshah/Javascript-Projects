const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const weightStatus = document.querySelector('#weight-status');
  // Calculate The BMI
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
    weightStatus.innerHTML = '';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
    weightStatus.innerHTML = '';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine the weight status
    let status = '';
    if (bmi < 18.6) {
      status = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = 'Normal Range';
    } else {
      status = 'Overweight';
    }

    // Display the result and weight status
    results.innerHTML = `BMI: ${bmi}`;
    weightStatus.innerHTML = `Weight Status: ${status}`;
  }
});
