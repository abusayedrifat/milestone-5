function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomALphabet() {
    //get or creat aplhabet array
    const alphabetSting = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSting.split('');
    //geta random index of 0-25
 const index = Math.round(Math.random()*25);
//  console.log(index);
const alphabet = alphabets[index];
// console.log(index, alphabet);
return alphabet;

}