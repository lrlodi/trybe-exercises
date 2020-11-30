let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

let info1 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

  info['recorrente'] = 'Sim';

  for (keys in info, info1){
      console.log(info[keys] + ' e ' + info1[keys])
  }