var shapeSelector = document.getElementById("shape-select")

var label1 = document.querySelector(".label-1")
var label2 = document.querySelector(".label-2")

fetch("./../src/area.json")
    .then((response) => response.json())
    .then((dataReceived) => {
        useData(dataReceived)
    })
    .catch(error => console.error('Error fetching JSON:', error))

function useData(dataReceived) {
    var shapes = dataReceived.shapes
    shapeChangeWatcher(shapes)
}
function shapeChangeWatcher(shapes) {
    shapeSelector.addEventListener("change", function(event) {
        var selectedInd = event.target.selectedIndex
        var selectData = shapes[selectedInd]
        changeShapeAndElements(selectData)
    })
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function changeShapeAndElements(selectData) {
    var name = selectData.name
    var args = selectData.arguments
    var formula = selectData.formula

    var listArgs = args.split(" ")
    label1.innerHTML = capitalizeFirstLetter(listArgs[0])
    label2.innerHTML = capitalizeFirstLetter(listArgs[1])
}