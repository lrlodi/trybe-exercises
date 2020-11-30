let x = 10;
let y = 50;
let z = 100;

if (x > y && x > z){    
    console.log(x + " é o maior.")
} else if (x > y && x < z){
    console.log(z + " é o maior.")
} else if (x < y && y > z){
    console.log(y + " é o maior.")
} else {
    console.log(z + " é o maior.")
}