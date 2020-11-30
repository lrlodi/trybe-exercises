let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let largest;

for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
    if (numbers[index] > numbers[index + 1] {
        largest = numbers[index];
    }
}

let avg = soma / numbers.length;

console.log('A soma de todos os elementos do array é: ' + soma)

if (avg > 20) {
    console.log('A média aritmética dos elementos do array é maior que 20.')
} else {
    console.log('A média aritmética dos elementos do array é menor que 20.')
}
console.log('O maior elemento do array é: ' + largest)
