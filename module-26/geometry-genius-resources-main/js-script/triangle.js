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
