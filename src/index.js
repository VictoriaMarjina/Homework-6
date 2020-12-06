
function createSquare(n){
    let star = "* ";
    let i = 0;
    repeatString(i);
    function repeatString(i){
        if(i < n){
            console.log(star.repeat(n)); 
        }else{
            return console.log(" ");
        }
        repeatString(i+1);
    }
}
//createSquare(8);

function createEmptySquare(n){
    let star = "* ";
    let space = "  ";
    let i = 1;
    let spaceBlock = space.repeat(n-2);
    repeatString(i);
    function repeatString(i){
        if(i === n || i === 1){

            console.log(star.repeat(n)); 
        }else if(i < n && i != 1){

            console.log(star + spaceBlock + star);
        }else{

            return console.log(" ");
        }
        repeatString(i+1);
    }
}
//createEmptySquare(8);

function createTriangle(n){
    let weight = 2 * n - 1; // можно взять n, но будет уродство
    let height = (weight - (weight % 2)) / 2 + (weight % 2);
    let spaces = weight;

    for (i = height; i > 0; i--){
        let str = "";
        for (j = i; j <= weight; j++){
            if (i === 1) {
                str += "*";
            } else if (j === weight || j === spaces || (j >= spaces && j <= weight)){
                str += "*";
            } else {
                str += " ";
            }
        }
        spaces -= 2;
        console.log(str);
    }
}
//createTriangle(8);
//console.log(" ");

function createEmptyTriangle(n){
    let weight = 2 * n-1;
    let height = (weight - (weight % 2)) / 2 + (weight % 2);
    let spaces = weight;

    for (i = height; i > 0; i--) {
         let str = "";
        for (j = i; j <= weight; j++) {
            if (i === 1) {
                str += "*";
            } else if (j === weight || j === spaces) {
                str += "*";
            } else {
                str += " ";
            }
        }
        spaces -= 2;
        console.log(str);
    }
}
//createEmptyTriangle(8);
//console.log(" ");

function createHourglass(n){
    let h = n / 2;
    function createConus(n){
        let weight = 2 * n-1;
        let height = (weight - (weight % 2)) / 2 + (weight % 2);
        let spaces = 1;
    
        for (let i = 1; i <= height; i++) {
            let str = "";
            for (j = i; j <= weight; j++) {
                if (i === 1) {
                    str += "*";
                } else if (j === weight || j === spaces || (j >= spaces && j <= weight)) {
                    str += "*";
                } else {
                    str += " ";
                }
            }
            spaces += 2;
            console.log(str);
        }
    }
    createConus(h);

    function createTriangle(n){
        let weight = 2 * n - 1; // можно взять n, но будет уродство
        let height = (weight - (weight % 2)) / 2 + (weight % 2);
        let spaces = weight;
    
        for (i = height; i > 0; i--){
            let str = "";
            for (j = i; j <= weight; j++){
                if (i === 1) {
                    str += "*";
                } else if (j === weight || j === spaces || (j >= spaces && j <= weight)){
                    str += "*";
                } else {
                    str += " ";
                }
            }
            spaces -= 2;
            console.log(str);
        }
    }
    createTriangle(h);
}
//createHourglass(8);
//console.log(" ");

function createEmptyHourglass(n){
    let h = n / 2;
    function createEmptyConus(n){
        let weight = 2 * n-1;
        let height = (weight - (weight % 2)) / 2 + (weight % 2);
        let spaces = 1;
    
        for (let i = 1; i <= height; i++) {
            let str = "";
            for (j = i; j <= weight; j++) {
                if (i === 1) {
                    str += "*";
                } else if (j === weight || j === spaces) {
                    str += "*";
                } else {
                    str += " ";
                }
            }
            spaces += 2;
            console.log(str);
        }
    }
    createEmptyConus(h);

    function createEmptyTriangle(n){
        let weight = 2 * n - 1;
        let height = (weight - (weight % 2)) / 2 + (weight % 2);
        let spaces = weight;
    
        for (i = height; i > 0; i--) {
             let str = "";
            for (j = i; j <= weight; j++) {
                if (i === 1) {
                    str += "*";
                } else if (j === weight || j === spaces) {
                    str += "*";
                } else {
                    str += " ";
                }
            }
            spaces -= 2;
            console.log(str);
        }
    }
    createEmptyTriangle(h);
}
//createEmptyHourglass(8);
//console.log(" ");