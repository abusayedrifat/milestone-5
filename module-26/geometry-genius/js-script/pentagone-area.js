function pentagoneArea() {
    const perimeter = getInputValues('parallelogram-perimeter');
    const apothem = getInputValues('parallelogram-apothem');
    const area = 0.5*perimeter*apothem;
    console.log(perimeter);
    console.log(apothem);
    // console.log('pentagone area is: ',area);
    setInnerTextById('penta-area',area);
}
function getInputValues(inputField) {
    const inputFieldId = document.getElementById(inputField);
    const inputText = parseFloat(inputFieldId.value);
    return inputText;
}
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}