let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        odds += 1;
    }
}
if (odds == 0) {
    console.log('Nenhum ímpar encontrado.')
} else {
    console.log('Há ' + odds + ' número(s) ímpar(es) no array.')
}
