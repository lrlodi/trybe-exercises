const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ([first, second, third]) => ([third, second, first]);

// quando passamos um array desestruturado como parametro, podemos reorganizar os elementos em outra ordem
// conforme o exercício pede. Podemos nos precaver para que a função responda corretamente
// caso o array passado como parâmetro contenha mais que três elementos. Podemos fazer isso
// definindo const swap = ([first, second, third, ... rest]) isso vai fazer com que a função
// se importe somente com os trẽs primeiros elementos, alterando suas posições, e mantendo
// a posição de todos os outros elementos do array, independente de quantos forem. Para isso
// funcionar precisamos que o retorno da função utilize o ... (spread operator). Fazemos isso
// com ([third, second, first, ...rest]). O primeiro '...' será o rest operator, que irá
// juntar todos os outros elementos em um array; o segundo '...' será o spread operator, que irá 
// espalhar os elementos. Caso não utilizemos o spread, nosso retorno ficaria como
// [3, 2, 1, [resto do array]].

const swappedList = swap(myList)

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)