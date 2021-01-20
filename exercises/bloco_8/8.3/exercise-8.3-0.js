// const { find } = require("lodash");

// const { find } = require("lodash");

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const findEven = numbers.filter(number => {
//   return number % 2 === 0;
// });

// const sumOfEvens = findEven.reduce((acc, curr) => acc + curr)

const sumOfEvens = numbers
  .filter(number => number % 2 === 0)
  .reduce((acc, curr) => acc + curr);
  
console.log(sumOfEvens);