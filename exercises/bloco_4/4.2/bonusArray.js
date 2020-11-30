let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for ( let counter = 0 ; counter < numbers.length ; counter += 1) {
    newArray.push(numbers[counter] * numbers[counter + 1]);
    if (counter == (numbers.length - 1)) {
        newArray.push(numbers[counter] * 2)
    }
}

console.log(newArray)