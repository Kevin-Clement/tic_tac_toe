let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let player = 'X';

/**
 * 
 * @returns {boolean} true if the game is over, false otherwise
 */
const isGameOver = () => {
    if (isWinner()) {
        console.log(` Player ${player} won!`);
        return true;
    } else if (isDraw()) 
        return true;
    else 
        return false;
    
}

const isDraw = () =>{
    // Check if the game is a draw
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === null) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 
 * @returns {boolean} true if there is a winner, false otherwise
 */
const isWinner = () => {
    if (checkRows() || checkColumns() || checkDiagonals()) {
        return true;
    } else {
        return false;
    }
}

/**
 * 
 * @returns {boolean} true if the row has a winner, false otherwise
 */
const checkRows = () => {
    for (var i = 0; i < board.length; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    return false;
}

/**
 * 
 * @returns {boolean} true if the column has a winner, false otherwise
 */
const checkColumns = () => {
    for (var i = 0; i < board.length; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    return false;
}

/**
 * 
 * @returns {boolean} true if the diagonal has a winner, false otherwise
 */
const checkDiagonals = () => {
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    } else {
        return false;
    }
}

const switchPlayer = () => {
    if (player === 'X') player = 'O';
    else player = 'X';
}

const printBoard = () => {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

const play = (row, column) => {
    board[row][column] = player;
    if (!isGameOver()) {
        switchPlayer();
    }
}

// Play the game
play(1, 1);
play(0, 0);
play(0, 2);
play(2, 0);
play(1, 0);
play(1, 2);
play(2, 1);
play(0, 1);
play(2, 2);


printBoard();

console.log(isGameOver());