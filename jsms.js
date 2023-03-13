
/*
JAVASCRIPT MINESWEEPER
REPRESENTED AS AN ARRAY FOR USE IN REACT
*/
// key:
    // User Board
    // 'U' Unknown cell
    // '0' Empty cell
    // '1-8' Quantity of mines nearby

    // Game Board
    // '0' No mine
    // '1' Mine
// /key

const height = 10;
const width = 15;

const checkBoundary = (x, y, modifier = 0) => {
    //returns object of boundary booleans
    const thisHeight = height;
    const thisWidth = width - 1;

    const boundaries = {
        left: (x - modifier > 0),
        right: (x + modifier < thisWidth),
        top: (y + modifier < thisHeight),
        bottom: (y - modifier > 0),
    };
    const corners = {
        topLeft: (boundaries.left && boundaries.top),
        topRight: (boundaries.right && boundaries.top),
        bottomRight: (boundaries.right && boundaries.bottom),
        bottomLeft: (boundaries.left && boundaries.bottom),
    }
    return {...boundaries, ...corners};
};

const generateGameBoard = (gameBoard, firstClickX, firstClickY) => {};

const leftClick = () => {};

const rightClick = () => {};

const popCell = () => {};

const regionClear = () => {};



const printBoard = (board) => {};

const gameBoard = [];
const userBoard = [];
printBoard(gameBoard);
printBoard(userBoard);

console.log(checkBoundary(0, 7, 3));