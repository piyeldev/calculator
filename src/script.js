var convertBtn = document.getElementById("convert");
var mathjaxFormula = document.getElementById("mathjax-formula");
var weightVal = document.getElementById("weight");
var heightVal = document.getElementById("height");

convertBtn.addEventListener("click", function () {
  var weight = weightVal.value;
  var height = heightVal.value;
  removeErrors();
  checkForFields(weight, height);
});

function checkForFields(weight, height) {
  var errElement = document.createElement("span");
  errElement.className = "error";
  errElement.textContent = "Please fill out the fields";
  if (!height || !weight) {
    placeError(errElement);
  } else if (!height && !weight) {
    placeError(errElement);
  } else {
    calculateBmi(weight, height);
  }
}

function placeError(errElement) {
  var errorPlace = document.getElementById("error-place");
  errorPlace.appendChild(errElement);
}
function calculateBmi(weight, height) {
  var convertHeightToMeters = height / 100;
  console.log("working!");
  console.log(
    `Height: ${height} (${convertHeightToMeters} in meters) Weight: ${weight}`
  );
  var answer = weight / (convertHeightToMeters * convertHeightToMeters);

  mathjaxFormula.textContent = `\\[BMI = {weight (kg) \\over height (m)^2}= {${weight}kg\\over${convertHeightToMeters}m^2} = ${answer}\\]`;
  MathJax.typeset();
}

function removeErrors() {
  var errElementContainer = document.getElementById("error-place");

  errElementContainer.innerHTML = "";
}

function limits(weight, height) {}
