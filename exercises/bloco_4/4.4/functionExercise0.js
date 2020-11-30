function isPalindrome (string){
    let invertedWord = [];
    let word = [];
    for (let originalLetter = 0 ; originalLetter < string.length ; originalLetter += 1){
        word.push(string[originalLetter]);
    }
    for (let invertedLetter = string.length - 1 ; invertedLetter >= 0 ; invertedLetter -= 1){
        invertedWord.push(string[invertedLetter]);
            
    }
    
    for(let index = 0 ; index < string.length ; index += 1){
        if (word[index] === invertedWord[index]){
            console.log('É um palíndromo!')
            return true;
        } else {
        console.log('Não é um palíndromo.')
        return false;
        }
    }
}
let teste = 'soccorammesubinoonibusemmarrocos';
isPalindrome(teste)