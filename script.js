const box = document.querySelectorAll('.box');
const whichPlayer = document.querySelector('#player');

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let player = 'X';

const play = (event) => {
    const box = event.target;
    if(box.textContent !== '' || isWinner())
        return;
    box.innerHTML = player;
    syncBoard(box);
    if (!isWinner()) {
        switchPlayer();
        whichPlayer.innerHTML = `Player ${player}'s turn`;
    }else{
        whichPlayer.innerHTML = `Player ${player} won !`;
        setTimeout(() => {
            resetBoard();
        }, 3000);
    }
}

const syncBoard = (box) => {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (box.id === `box${i}${j}`) {
                board[i][j] = player;
            }
        }
    }
}

box.forEach(box => {
    box.addEventListener('click', play);
});

const switchPlayer = () => {
    if (player === 'X') 
        player = 'O';
    else 
        player = 'X';
}

const resetBoard = () => {
    box.forEach(box => {
        box.innerHTML = '';
    });
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    player = 'X';
    whichPlayer.innerHTML = '';
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

const printBoard = () => {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}