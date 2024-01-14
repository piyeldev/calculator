var convertBtn = document.getElementById("convert");
var mathjaxFormula = document.getElementById("mathjax-formula");
var weightVal = document.getElementById("weight");
var heightVal = document.getElementById("height");
var unitSelectorHeight = document.getElementById("height-unit")
var unitSelectorWeight = document.getElementById("weight-unit")

function print(stringArg) {
  console.log(stringArg)
}
convertBtn.addEventListener("click", function () {
  var weight = weightVal.value;
  var height = heightVal.value;
  var convertedValues = converter(weight, height)
  removeErrors();
  checkAndCalculate(convertedValues[0], convertedValues[1]);
});

function checkAndCalculate(weight, height) {
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
  console.log("working!");
  console.log(
    `Height: ${height} Weight: ${weight}`
  );
  var answer = (weight / (height**2)).toFixed(2);

  mathjaxFormula.textContent = `\\[BMI = {weight (kg) \\over height (m)^2}= {${weight}kg\\over${height}m^2} = ${answer}\\]`;
  MathJax.typeset();
}

function removeErrors() {
  var errElementContainer = document.getElementById("error-place");

  errElementContainer.innerHTML = "";
}

function converter(weight, height) {
  var weightUnit = unitSelectorWeight.options[unitSelectorWeight.selectedIndex].text
  var heightUnit = unitSelectorHeight.options[unitSelectorHeight.selectedIndex].text
  console.log(`Weight Unit: ${weightUnit}, Height Unit ${heightUnit}`)
  var convertedWeight
  var convertedHeight

  switch (weightUnit) {
    case "Kilograms (kg)":
      // just return kg
      print("kilos")
      convertedWeight = weight
      break;
    case "Pounds (lbs)":
      // converts lbs to kg
      convertedWeight = weight * 0.45359237
      break;
    case undefined || null:
      console.log("error")
      break;
  }

  switch (heightUnit) {
    case "Meters (m)":
      convertedHeight = height
      break;
    case "Centimeters (cm)":
      convertedHeight = height / 100
      break;
    case "Inches (in)":
      convertedHeight = height * 0.0254
      break;
    case undefined || null:
      console.log("error")
      break;
  }

  var values = [convertedWeight, convertedHeight]
  console.log(values)
  return values
}
