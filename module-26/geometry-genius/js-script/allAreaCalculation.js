//triangle area
function triangle() {
    const base = setInputValuesById('triangle-base');
    const height = setInputValuesById('triangle-height');
const area = 0.5*base*height;
setInnerTextById('tri-area' , area)
}
//rectangle area
function rectangle() {
    const width = setInputValuesById('rectangle-width');
    const length = setInputValuesById('rectangle-length');
    const area = width*length;
    setInnerTextById('rectangle-area',area);
}
//peralelogram area
function perallelogram() {
    const base = setInputValuesById('parallelogram-base');
    const height = setInputValuesById('parallelogram-height');
    const area = base*height;
    setInnerTextById('perallelogram-area',area);
}

//rhombus area
function rhombus() {
    const length = setInputValuesById('rhombus-length');
    const height = setInputValuesById('rhombus-height');
    const area = length*height;
    setInnerTextById('rhombus-area',area);
}
//pentagone area
function pentagone() {
    const perimeter = setInputValuesById('pentagone-perimeter');
    const apothem = setInputValuesById('pentagone-apothem');
    const area = perimeter*apothem;
    setInnerTextById('penta-area',area);
}
//ellipse area
function ellipse() {
    const a = setInputValuesById('major-lenght');
    const b = setInputValuesById('minor-length');
    const area = 3.1416*a*b;
    setInnerTextById('ellipse-area',area);
}

//similar execution scripts for area calculation
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}

function setInputValuesById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = parseFloat(inputField.value);
    return inputText;
}
//---------------------------