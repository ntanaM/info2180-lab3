// Dana Archer
// 620164212

// Exercise 1: Layout the board

document.addEventListener(`DOMContentLoaded`, function(){

    // Get html elements
    const boardSquares = document.querySelectorAll(`#board div`); // Gets all board divs
    const gameStatus = document.getElementById(`status`); // Gets game status message
    const newGame = document.getElementsByClassName(`btn`)[0]; // Gets new game button 

    // Add squares to the board
    boardSquares.forEach(square => square.classList.add(`square`));



});

