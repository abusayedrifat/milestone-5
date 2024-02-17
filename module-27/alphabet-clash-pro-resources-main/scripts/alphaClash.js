// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

//     // const scoreBoard = document.getElementById('score-board');
//     // scoreBoard.classList.remove('hidden')
// }



function continueGame() {
    //generate random alphabet
    const alphabet = getRandomALphabet();
 console.log('your random alphat is : ',alphabet);

 //set randomly generated alphabet to the screen;
 const randomAlphabet = document.getElementById('current-alphabet');
 randomAlphabet.innerText = alphabet;

 //set background color
 setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


