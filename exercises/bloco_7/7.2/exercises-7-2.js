// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const showSkills = (student) => console.log(Object.values(student));

// showSkills(student2);

// function showSkills(object) {
//   let skills = Object.keys(object);
//   let skillsLevel = Object.values(object);

//   for(let i = 0; i < skills.length; i += 1) {
//     let skillName = skills[i];
//     let skillLevel = skillsLevel[i];
//     console.log(`${skillName}, Nível:${skillLevel}`);
//   }
// }

// showSkills(student2);

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsWithFor(student));

// // Com Object.values
// console.log(listSkillsWithValues(student));

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const showSkills = (student) => Object.values(student);

// console.log(showSkills(student));


// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);

//   for(i in pairKeyValue) {
//     console.log('--------');
//     console.log('Pais:', pairKeyValue[i][0]);
//     console.log('Capital:', pairKeyValue[i][1]);
//   };                

// console.log(pairKeyValue);

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
//   wife: 'Susana',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
//   age: 30,
// };

// Object.assign(person, info, family)
// console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);