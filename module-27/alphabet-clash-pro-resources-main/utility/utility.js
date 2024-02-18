

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


//alphabet color
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
//remove alphabet color
function  removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const value =parseInt(element.innerText);
    return value;
}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value ;
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text
}

//alphabet clash script
function getRandomALphabet() {
    //1.get or creat aplhabet array
    const alphabetSting = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSting.split('');

    //2.get a random index of 0-25
 const index = Math.round(Math.random()*25);
//  console.log(index);
const alphabet = alphabets[index];
// console.log(index, alphabet);
return alphabet;

}