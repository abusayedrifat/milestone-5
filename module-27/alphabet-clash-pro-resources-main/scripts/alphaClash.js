// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

//     // const scoreBoard = document.getElementById('score-board');
//     // scoreBoard.classList.remove('hidden')
// }



function continueGame() {
    const alphabet = getRandomALphabet();
 console.log('your random alphat is : ',alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


