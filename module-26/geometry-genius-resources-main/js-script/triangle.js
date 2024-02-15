function triangle() {
   const triBase =  document.getElementById('triangle-base');
   const base = parseFloat(triBase.value);
//    const check = typeof(convert)
const triHeight = document.getElementById('triangle-height');
const height = parseFloat(triHeight.value) 

const area = 0.5*height*base ;
console.log(area);
   console.log(base);
   console.log(height);
}
function rectangle() {
   const recWidth =  document.getElementById('rectangle-width');
   const width = parseFloat(recWidth.value);
//    const check = typeof(convert)
const recLength = document.getElementById('rectangle-length');
const length = parseFloat(recLength.value) 

const area = length*width ;
console.log(area);
   console.log(width);
   console.log(length);
}
