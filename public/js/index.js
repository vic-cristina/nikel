//const myName = "Victoria Cristina";
let myName2 = "Morphea Yuno";
let personDefault = {
  name: "Victoria Cristina",
  age: "26",
  profession: "English Teacher",
};

let nomes = ["Victoria Cristina", "Luna Lima", "Galatea"];

let pessoasListaVazia = [];

let pessoas = [
  {
    name: "Victoria Cristina",
    age: "26",
    profession: "English Teacher",
  },
  {
    name: "Victoria Cristina",
    age: "26",
    profession: "English Teacher",
  },
];

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("--------IMPRIMIR PESSOAS----------");
  pessoas.forEach((item) => {
    console.log("Nome:");
    console.log(item.name);

    console.log("Age:");
    console.log(item.age);

    console.log("Profession:");
    console.log(item.profession);
    console.log(item);
  });
}

imprimirPessoas();

console.log(pessoas);

adicionarPessoa({
  name: "Victoria Cristina",
  age: "260",
  profession: "English Teacher",
});

console.log(pessoas);

// console.log("Nome:");
// console.log(person.name);

// console.log("Idade:");
// console.log(person.age);

// console.log("Profissão:");
// console.log(person.profession);

// function printPerson(person) {
//   console.log("Nome:");
//   console.log(person.name);

//   console.log("Idade:");
//   console.log(person.age);

//   console.log("Profissão:");
//   console.log(person.profession);
// }

// printPerson(personDefault);

// imprimirPessoa({
//   nome: "Luna Lima",
//   idade: "24",
//   trabalho: "Art Director",
// });

// // let people = ["Victoria Cristina", "Luna Lima", "Galatea Mortífera"];

// let listaVazia = [];

// let people = [
//   {
//     name: "Victoria Cristina",
//     age: "26",
//     profession: "English Teacher",
//   },

//   {
//     name: "Luna Lima",
//     age: "24",
//     profession: "Art Director",
//   },
// ];

// function addPerson() {
//   people.push(people);
// }

// addPerson({
//   name: "Landrugo",
//   age: "100",
//   profession: "Gravekeeper",
// });

// console.log(people);

// console.log("Initial name:");
// console.log(myName2);

// myName2 = "Victoria Cristina";

// console.log("Altered name:");
// console.log(myName2);

// function changeName() {
//   myName2 = "Luanna Brune";
//   console.log("Altered name:");
//   console.log(myName2);
// }

// function getAndChangeName(newName) {
//   myName2 = newName;
//   console.log("Altered value receiving name");
//   console.log(myName2);
// }

// // //getAndChangeName("Maria");
// // getAndChangeName("Luana");
// // getAndChangeName("Anastácia");

// function printPerson(person) {
//   console.log("Name:");
//   console.log(person.name);

//   console.log("Age:");
//   console.log(person.age);

//   console.log("Profession:");
//   console.log(person.profession);
// }

// function printPerson(person) {}

// Bootstrap Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
