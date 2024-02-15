function perallelogramArea() {
    const base = getInputMeasure('parallelogram-base');
    console.log('base value : ',base);
    const height = getInputMeasure('parallelogram-height');
    console.log('height value : ',height);
}
function getInputMeasure(inputField) {
   
 const inputFieldId = document.getElementById(inputField);
 const inputText = inputFieldId.value;
 const inputValue = parseFloat(inputText)
//  console.log(convert);
return inputValue
}