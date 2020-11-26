trybeArray = [];

for (let counter = 1 ; counter < 26 ; counter += 1) {
    trybeArray.push(counter);
}

for (let divisor = 0 ; divisor < trybeArray.length ; divisor += 1) {
    let divided = trybeArray[divisor] / 2;
    console.log(divided)
}