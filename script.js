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
    board.map((row, rowIndex) => {
        row.map((col, colIndex) => {
            if (box.id === `box${rowIndex}${colIndex}`) {
                board[rowIndex][colIndex] = player;
            }
        })
    })
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
    if (checkRows() || checkColumns() || checkDiagonals()) 
        return true;
    else
        return false;
}

/**
 * 
 * @returns {boolean} true if the row has a winner, false otherwise
 */
const checkRows = () => {
    return board.some(row => row.every(cell => cell === player));
}

/**
 * 
 * @returns {boolean} true if the column has a winner, false otherwise
 */
const checkColumns = () => {
    return board[0].some((cell, index) => cell === player && board[1][index] === player && board[2][index] === player);
}

/**
 * 
 * @returns {boolean} true if the diagonal has a winner, false otherwise
 */
const checkDiagonals = () => {
    return (board[0][0] === player && board[1][1] === player && board[2][2] === player) || (board[0][2] === player && board[1][1] === player && board[2][0] === player);
}

const printBoard = () => {
    board.map(row => console.log(row));
}