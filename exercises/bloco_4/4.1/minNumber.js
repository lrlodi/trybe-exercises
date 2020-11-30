let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 200, 1];
let isSmaller = numbers[0];
let minNumber= numbers[0];

for (let counter = 0 ; counter < numbers.length ; counter += 1 ) {
    if (numbers[counter] < counter) {
        isSmaller = numbers[counter];
    }
        if(isSmaller < minNumber) {
            minNumber = isSmaller;
        }
}
console.log('O menor elemento do array é: ' + minNumber)