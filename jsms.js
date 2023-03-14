
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

const height = 8;
const width = 10;


//helpers
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
    const allBoundaries = {
        ...boundaries,
        ...corners,
        total: (corners.topLeft && corners.bottomRight),
    };

    return allBoundaries;
};

const checkInboundCell = (x, y) => {
    if( ((x >= 0) && (x <= width-1)) && ((y <= height-1) && (y >= 0)) ){
        return true;
    }
    return false;
};


//game functions
const generateGameBoard = (gameBoard, firstClickX, firstClickY) => {
    for(let i = 0; i < width; i++){
        const thisColumn = [];
        for(let j = 0; j < height; j++){
            thisColumn.push(Math.random() >= 0.70 ? 1 : 0);
        }
        gameBoard.push(thisColumn);
    }

    //clears out small region around first click
    for(let i = firstClickX - 2; i < firstClickX + 2; i++){
        for(let j = firstClickY - 2; j < firstClickY + 2; j++){
            if(checkInboundCell(i, j)){
                gameBoard[i][j] = 0;
            }
        }
    }
};

const leftClick = () => {};

const rightClick = () => {};

const popCell = () => {};

const regionClear = () => {};


//tools & testing
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
generateGameBoard(gameBoard, 9, 0);
printBoard(gameBoard);