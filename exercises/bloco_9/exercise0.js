const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = callback => { // alteramos o parâmetro de getUser para que seja uma função
  const userToReturn = {
    firstName: "Luciano",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn) // o retorno de getUser será a função passado como parâmetro para getUser
};



// Abaixo, quando chamamos a função getUser com outra função como parâmetro, getUser irá retornar a função do parâmetro
// ou seja, quando chegar em 'return' getUser irá executar o a callback do parâmetro, e o resultado será um ou outro
// de acordo com a função passada.

assert.strictEqual(getUser(userFullName), "Hello! My name is Luciano Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Luciano is Russian"); // complete a chamada da função de getUser