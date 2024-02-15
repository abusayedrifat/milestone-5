//option-1
function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

//option-2
    const makeSalmon = document.getElementById('make-salmon');
    makeSalmon.onclick = 
    function makeSalmon() {
        document.body.style.backgroundColor = 'salmon'
    }
//option-3
const makeGray = document.getElementById('make-gray');
makeGray.addEventListener('click', makeGrays);
function makeGrays() {
    document.body.style.backgroundColor = 'gray';
}
//option-3 - another
const makeRedButton = document.getElementById('make-red');
makeRedButton.addEventListener('click', function makeRed() {
  document.body.style.backgroundColor = 'red'
} )

//option-3 final
//important : we will use it sometimes
//  document.getElementById('make-goldenRod').addEventListener('click', function () {})
document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})



