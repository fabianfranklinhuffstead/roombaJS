/* Roomba JS */

//Init Parsing
const fs = require('fs');
const file = process.argv[2];
const option = process.argv[3];
const txtFile = file;
const str = fs.readFileSync(txtFile, 'utf8');
const arr = str.match(/[^\r\n]+/g);

//Init parse configs
const grid = arr[0];
const hoover = arr[1];
const dirt = [];
const instructions = arr[arr.length-1];

// Init all subsequent dirt values 
for(var i = 2; i <= arr.length -2; i++){
    dirt.push(arr[i]);
}

//Init Grid
const xGrid = grid[0];
const yGrid = grid[2];
let empty = [];
for (var i = 0; i < xGrid; i++){
    empty.push([0]);
    for(var j = 0; j < yGrid; j++){
        empty[i][j] = 0;
    }
}

//Init values
let dirtcleaned = 0;
const gridLength = empty.length -1;

//System coordinate calibration 
const invertY = (x) => (empty.length -1) - x;

//Dirt Generator
for(plots in dirt){
    empty[invertY(dirt[plots][0])][dirt[plots][2]] = 1;
}

//Init Hoover Configs
let yHoover = invertY(hoover[0]);
let xHoover = parseInt(hoover[2]);

//Paint X to grid
const paint   = () => empty[yHoover][xHoover] = 'X';
const unpaint = () => empty[yHoover][xHoover] = 0;
const clean   = () => { if(empty[yHoover][xHoover] == 1){dirtcleaned++} };

// Init directions
const north = () => (yHoover != 0) ? yHoover = yHoover -1 : 0;
const east  = () => (xHoover != gridLength) ? xHoover = xHoover +1 : gridLength;
const south = () => (yHoover != gridLength) ? yHoover = yHoover +1 : gridLength;   
const west  = () => (xHoover != 0) ? xHoover = xHoover -1 : 0;  

paint(); //paint 'X'
(() => { if(option == '-v'){ console.log("\nStart");console.log(empty);} })() //verbose option

const move = (direction) => {
    unpaint()
    switch (direction){
        case 'N':
            north();
           break;
        case 'E':
            east();
           break;
        case 'S':
            south();
           break;
        case 'W':
            west();
           break;
        default:
           break;
    }
    clean();
    paint();
}
 
for (i in instructions){
        move(instructions[i]);
}
(() => { if(option == '-v'){ console.log('\nEnd');console.log(empty);} })() //verbose option
console.log(dirtcleaned+"\n"+invertY(yHoover)+" "+xHoover);
