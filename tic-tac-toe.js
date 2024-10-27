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

    // Exercise 2: Add an X or O square to the board

    // Initialize variables

    // Set player X and O as constants
    const player_X = "X";
    const player_O = "O";

    // Set the current player to X
    let current_player = player_X;

    // Set Array to keep track of board
    let board = Array(9).fill(null);


    // Set functionality for squares on click
    boardSquares.forEach((square, index) => {  // square: for each div in class square. i: the index number of the current square in the array

        // Exercise 3: Change the style when you move your mouse over a square

        square.addEventListener(`mouseover`, function(e){
            e.target.classList.add(`hover`); 
        });


        square.addEventListener(`mouseout`, function(e){
            e.target.classList.remove(`hover`);
        
        });
        
        
        square.addEventListener(`click`, function(e){
            let currentSquare = e.target // Saves the current square being manipulated in a variable

            // Add X or O to a square
            if(currentSquare.textContent != "X" && currentSquare.textContent != "O"){ 
                currentSquare.textContent = current_player
                currentSquare.classList.add(current_player) // Adds proper styling 
                board[index] = current_player
    
                current_player =  current_player === player_X? player_O:player_X; // Alternates between X and O
            }

        });
    }); 



});

