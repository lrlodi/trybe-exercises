function add (a, b){
    let sum = a + b;
    return sum;
}

function subtraction (a, b){
    let resultado;
    if (a > b){
        resultado = a - b
        return resultado;
    } else {
        resultado = b - a;
        return resultado;
    }
}

function multiply (a, b){
    let result = a * b;
    return result;
}

function divide (a, b){
    let result = a / b;
    return result;
}

function modulus (a, b){
    let result = a % b;
    return result;
}

console.log(add(30, 2))
console.log(subtraction(30, 2))
console.log(multiply(30, 2))
console.log(divide(30, 2))
console.log(modulus(30, 2))