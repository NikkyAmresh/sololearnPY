//function to check if a series of numbers is complete and correct;
function check(arr) {
    //get a copy of the original array
    var copy = arr.slice();
    //sort it
    copy.sort();
    //check if it matches [1,2,3,4,5,6,7,8,9]
    for (var i = 1; i < 10; i += 1 ){
        if (i !== copy[i-1]) return false;
    }
    return true;
}

function getRow(puzzle, x,y){
    // a row in a puzzle matches the array on that index
    // so we just need to return a copy of that array
    return puzzle[y].slice();
}

function getCol(puzzle, x,y){
    // column should return an array of all values on that index in each of the sub arrays
    // pay attention that if you use x, y => x is the column, y is the raw, which in array indexes
    // is array[y][x];
    var result = [];
    for (var i = 0, len = puzzle.length; i < len; i += 1){
        result.push(puzzle[i][x]);
    }
    return result;
}

function getSquare(puzzle, x,y){
    var result = [];
    // get the coordinates of the containing square
    var dx = Math.floor( x / 3 );
    var dy = Math.floor( y / 3 );
    // get all numbers from the containing square
    for (var i = 0; i < 3; i += 1){
        for (var j = 0; j < 3; j += 1) {
            result.push(puzzle[dy*3+i][dx*3+j]);
        }
    }
    return result;
}

function solved(puzzle) {
    //check if all rows, columns, squares are properly solved
    for (var i = 0; i < 9; i += 1 ) {
        var row = getRow(puzzle, 0, i);
        var col = getCol(puzzle, i, 0);
        var square = getSquare(puzzle, i % 3, Math.floor( i / 3 ));
        if (!check(row) || !check(col) || !check(square)) return false;
    }
    return true;
}

//function to give us the coordinates of the next blank space
function nextFree(puzzle) {
    for (var i = 0; i < 9; i += 1) {
        //loop each row
        for (var j = 0; j < 9; j += 1) {
            //loop each value in the row
            if (puzzle[i][j]===0) {
                //if blank return the coordinates
                return {x:j, y:i};
            }
        }
    }
    //if none found return false
    return false;
}

//function to return the possible numbers for a cell
function getPossibilities(puzzle,x,y) {
    //get the row, column and square of the cell
    var row = getRow(puzzle,x,y);
    var col = getCol(puzzle,x,y);
    var square = getSquare(puzzle,x,y);
    var result =[];
    //check all numbers from 1 to 9
    for (var i = 1; i < 10; i += 1) {
        if (row.indexOf(i) === -1 &&
            col.indexOf(i) === -1 &&
            square.indexOf(i) === -1 ) {
            //if the number does not exist in the row, col, square
            //add it to the possible numbers
            result.push(i);
        }
    }
    //if no possibilities return false
    if (result.length === 0) {
        return false;
    }
    //otherwise return the possible results
    return result;
}

function sudoku(puzzle) {
    var pos;
    // while there is a next blank cell
    while (pos = nextFree(puzzle)) {
        var x = pos.x;
        var y = pos.y;
        //get the possible numbers for that cell
        var possibilities = getPossibilities(puzzle, x, y);
        //if there are no possibilities that is not a possible solution
        if (!possibilities) return false;
        //try all numbers possible for the cell
        while (possibilities.length > 0) {
            //remove it from the possibilities
            var tryNumber = possibilities.pop();
            //place it in the puzzle
            puzzle[y][x] = tryNumber;
            //try to solve the newly formed puzzle
            if (!sudoku(puzzle)) {
                //if not successful reset the cell
                puzzle[y][x] = 0;
            } else {
                //otherwise puzzle is solved
                return puzzle;
            }
        }
        //if all possibilities are unsuccessful then this is not a valid solution
        return false;
    }
    // if the function is called by the last cell and there are no more blanks
    // if the puzzle is solved return it
    if (solved(puzzle)) {
        return puzzle;
    }
    // or there is no valid solution
    return false;
}

window.onload = function () {

    var puzzle = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];

    var notSolvedContainer = document.getElementById('not_solved');
    for (var i = 0; i < 9; i += 1) {
        notSolvedContainer.innerHTML += puzzle[i].join('|') + '<br>';
    }
    var solvedContainer = document.getElementById('solved');
    if (sudoku(puzzle)) {
        solvedContainer.innerHTML += ' solved:<br>'
        for (var i = 0; i < 9; i += 1) {
            solvedContainer.innerHTML +=puzzle[i].join('|') + '<br>';
        }
    } else {
        solvedContainer.innerHTML += 'can not be solved!'
    }
}
for(x=1;x<10;x++){document.write('<div><input maxlength=1 id='+x+' /></div>');if(x%3==0){ document.write('<hr>');}}