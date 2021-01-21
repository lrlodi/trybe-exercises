// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort(function(a, b) {return a - b});

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


function findLongestword(string) {
  let array = string.split(' ');
  let longestWordSize = 0;
  let longestWord = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWordSize) {
      longestWordSize = array[i].length;
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestword("Antônio foi no banheiro e não sabemos o que aconteceu"));