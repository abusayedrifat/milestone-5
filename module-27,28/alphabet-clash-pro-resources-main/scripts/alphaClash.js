// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

//     // const scoreBoard = document.getElementById('score-board');
//     // scoreBoard.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const keyPressed = event.key;

//stop the game
if (keyPressed === 'Escape') {
    gameOver();
}


    // console.log( keyPressed);
    //get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase()
console.log(keyPressed , expectedAlphabet);

//checked match or not


if (keyPressed === expectedAlphabet) {
    console.log('you got a point');
    //update score
    //1.get the current score
    const currentScoreElement = document.getElementById('current-score');

    const currentScore = parseInt(currentScoreElement.innerText );
    //2.increase the score by 1
    const newScore = currentScore+1 ;
    // show the update score
    currentScoreElement.innerText = newScore;
    //start new round
    continueGame();
    removeBackgroundColorById(expectedAlphabet);
}
else{
    
    console.log('you lost a life');

    //step-1: get the current life number
 const currentLifeElement = document.getElementById('current-life');
const currentLife = parseInt(currentLifeElement.innerText);
    //2. reduce the current life
const newLifeStaus = currentLife - 1;
    //3.update life status
  const lifeStatus =  currentLifeElement.innerText = newLifeStaus

    if (lifeStatus === 0) {
       gameOver();
    }
}
}






//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
    //generate random alphabet
    const alphabet = getRandomALphabet();
 console.log('your random alphabet is : ',alphabet);

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

function gameOver() {
    hideElementById('play-ground');
    showElementById('score-board');
    //update final score
    const gameScore = getTextElementValueById('current-score');
    // console.log(gameScore);
    setTextElementValueById('game-score', gameScore);
    // const currentAlphabet =  getElementTextById('current-alphabet')
    // removeBackgroundColorById(currentAlphabet);
    removeBackgroundColorById('current-alphabet')
}
//play again btn
function playAgain() {
    hideElementById('score-board');
    showElementById('play-ground');
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
}