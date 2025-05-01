const PI = 3.14;
let radius = 3

let area = 0;

area = radius * radius * PI

console.log(area)

radius = 20

const one = 1;
const two = "2";

let result = one * two;
console.log(result)

let global = "I'm global";

function exampleFucntion(){
    let block = "I am block level or local";
}


console.log(global);
exampleFucntion();

globle = "I'm also global"

console.log(globle);