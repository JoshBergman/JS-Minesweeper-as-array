
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

const height = 6;
const width = 8;

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
    };

    return {...boundaries, ...corners};
};

const generateGameBoard = (gameBoard, firstClickX, firstClickY) => {
    for(let i = 0; i < width; i++){
        const thisColumn = [];
        for(let j = 0; j < height; j++){
            thisColumn.push(Math.random() >= 0.72 ? 1 : 0);
        }
        gameBoard.push(thisColumn);
    }
};

const leftClick = () => {};

const rightClick = () => {};

const popCell = () => {};

const regionClear = () => {};



const printBoard = (board) => {
    for(let j = height - 1; j >= 0; j--){
        const temp = [];
        for(let i = 0; i < width; i++){
            temp.push(board[i][j]);
        }
        console.log(temp.join());
    }
};

const gameBoard = [];
const userBoard = [];
generateGameBoard(gameBoard);
printBoard(gameBoard);
// printBoard(userBoard);

