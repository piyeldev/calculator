var convertBtn = document.getElementById("convert");
var mathjaxFormula = document.getElementById("mathjax-formula");
var weightVal = document.getElementById("weight");
var heightVal = document.getElementById("height");
var weight = true
var height = false

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


/** 
 * A function that converts input into meters or kilograms
 * 
 * Use cm, kg, in, ft as unit .
 * */
function convert(number, unit, convertTo) {
    
}

function chooseUnit(unit, number) {
    switch(unit) {
        case "cm":
            break
        case "in":
            break
        case "ft":
            break
        case "lbs":
            break
    }
}