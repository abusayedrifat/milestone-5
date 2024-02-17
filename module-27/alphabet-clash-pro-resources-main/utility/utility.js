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