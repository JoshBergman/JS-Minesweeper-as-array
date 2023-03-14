
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
    const thisHeight = height - 1;
    const thisWidth = width - 1;

    const boundaries = {
        left: (x - modifier >= 0),
        right: (x + modifier <= thisWidth),
        top: (y + modifier <= thisHeight),
        bottom: (y - modifier >= 0),
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
const generateGameBoard = (gameBoard, userBoard, firstClickX, firstClickY) => {
    for(let i = 0; i < width; i++){
        const thisColumn = [];
        const userColumn = [];
        for(let j = 0; j < height; j++){
            thisColumn.push(Math.random() >= 0.70 ? 1 : 0);
            userColumn.push('U');
        }
        gameBoard.push(thisColumn);
        userBoard.push(userColumn);
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

const leftClick = (game, user, x, y) => {
    const thisCellValue = game[x][y];
    switch(thisCellValue){
        case 1:
            if(user[x][y] === 'U');
            console.log('You Lose');
        case 0:
            if(user[x][y] === 'U'){
                user[x][y] = mineCount(game, x, y);
            }
    }
};

const rightClick = (user, x, y) => {
    const currUserCell = user[x][y];
    if(currUserCell === 'U'){
        user[x][y] = 'F';
    } else if (currUserCell === 'F'){
        user[x][y] = 'U';
    }
};

const mineCount = (board, x, y) => {
    const surrounding = checkBoundary(x, y, 1);
    let totalMines = 0;

    if(surrounding.left){
        totalMines += board[x-1][y];
    }
    if(surrounding.topLeft){
        totalMines += board[x-1][y+1];
    }
    if(surrounding.top){
        totalMines += board[x][y+1];
    }
    if(surrounding.topRight){
        totalMines += board[x+1][y+1];
    }
    if(surrounding.right){
        totalMines += board[x+1][y];
    }
    if(surrounding.bottomRight){
        totalMines += board[x+1][y-1];
    }
    if(surrounding.bottom){
        totalMines += board[x][y-1];
    }
    if(surrounding.bottomLeft){
        totalMines += board[x-1][y-1];
    }
    
    return totalMines;
};

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
generateGameBoard(gameBoard, userBoard, 9, 0);
printBoard(gameBoard);
leftClick(gameBoard, userBoard, 1, 1);
rightClick(userBoard, 3, 3);
rightClick(userBoard, 4, 4);
rightClick(userBoard, 4, 4);
printBoard(userBoard);