const assert = require('assert')

// escreva sum abaixo
const sum = (...numbers) => {
  let result = 0;
  if (numbers.lenght === 0) {return 0};
  numbers.forEach(element => result += element);
  return result;
}

// Quando declaramos a função sum para receber (...numbers), isso significa que sum
// poderá receber um número infinito de parâmetros, pois o rest operator fará a função
// passar por todos os parâmetros realizando a soma de result + parâmetro atual através
// do método forEach() aplicado em numbers. O if checa se a função foi chamado sem
// nenhum parâmetro.

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)