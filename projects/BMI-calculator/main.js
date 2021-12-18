function calculateBMI() {
  let bmi;
  let result = document.querySelector("#result");
  const weight = parseInt(document.querySelector("#weight").value);
  document.querySelector("#weight-val").textContent = weight + " kg";

  const height = parseInt(document.querySelector("#height").value);
  document.querySelector("#height-val").textContent = height + " cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Category";
  } else if (bmi > 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.querySelector("#category").textContent = category;
}
