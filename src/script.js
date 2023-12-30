var convertBtn = document.getElementById("convert")
var mathjaxFormula = document.getElementById("mathjax-formula")
var weightVal = document.getElementById("weight").value
var heightVal = document.getElementById("height").value

convertBtn.addEventListener("click", function() {
    var weight = weightVal.value
    var height = heightVal.value
    var convertHeightToMeters = height /100
    console.log("working!")
    console.log(`Height: ${height} (${convertHeightToMeters} in meters) Weight: ${weight}`)
    var answer = weight/(convertHeightToMeters*convertHeightToMeters)
    
    mathjaxFormula.textContent = `\\[BMI = {weight (kg) \\over height (m)^2}= {${weight}kg\\over${convertHeightToMeters}m^2} = ${answer}\\]`
    MathJax.typeset()
})
