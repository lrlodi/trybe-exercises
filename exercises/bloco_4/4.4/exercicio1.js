let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log('Bem vinda, ' + info.personagem + '.')

  info['recorrente'] = 'sim';

  for (keys in info){
      console.log(info[keys])
  }