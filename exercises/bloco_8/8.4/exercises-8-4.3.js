const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

function filterPeople(list) {
  return list.filter(({bornIn, nationality}) => nationality === "Australian" && bornIn > 1900 && bornIn < 2000)
}

// a função filterPeople recebe um array(list) como parâmetro. Desse array, usei destructure em cada um dos objetos do array,
// aproveitando as chaves 'bornIn' e 'nationality'; Usando .filter no array recebido, filtrei os objetos cujas chaves
// cumprem o requisito de nacionalidade 'Australian' e 2000 > bornIn > 1900. O retorno é um array, e o assert checa
// as chaves de cada objeto retornado no array.

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })