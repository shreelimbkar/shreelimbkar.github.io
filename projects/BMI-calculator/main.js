function calculateBMI() {
  let bmi;
  let result = document.querySelector("#result");
  const weight = parseInt(document.querySelector("#weight").value);
  document.querySelector("#weight-val").textContent = weight + " kg";

  const height = parseInt(document.querySelector("#height").value);
  document.querySelector("#height-val").textContent = height + " cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;
}
