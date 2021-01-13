const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderKeys = Object.keys(order);
  const customerName = order.name;
  const phoneNumber = order.phoneNumber;
  const orderAddress = Object.values(order.address);
  const attendantName = ((Object.assign({}, order.order)).delivery).deliveryPerson; //Encapsulando vários objetos conseguimos acessar uma propriedade específica.

  console.log(`Olá ${attendantName}, entrega para ${customerName}, Telefone: ${phoneNumber}, ${orderAddress}.`)
  // Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);