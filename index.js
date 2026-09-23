// String
let nome = "pedro";
console.log("Nome:", nome);

// Number
let idade = 17;
console.log("Idade:", idade);

// Boolean
let aluno = true;
console.log("É aluno?", aluno);

// Array
let linguagens = ["JavaScript", "Python", "HTML"];
console.log("Linguagens:", linguagens);

// Object
let pessoa = {
  nome: "pedro",
  idade: 17,
  profissao: "Aluno",
};
console.log("Pessoa:", pessoa);

let a = 10;
let b = 20;
let soma = a + b;
console.log("Soma:", soma);

let saudacao = "Olá, " + nome + "!";
console.log(saudacao);

// Manipulando arrays
linguagens.push("CSS");
console.log("Linguagens atualizadas:", linguagens);

function saudacao(nome, idade) {
  return "Olá, " + nome + ", você tem " + idade + " anos.";
}

let resultado = saudacao("pedro", 17);

console.log(resultado);

function soma(a, b) {
  return a + b;
}
let resultadosoma = soma(10, 20);
console.log("Resultado da soma:", resultado);

let numero = 100;

function dobrar(numero) {
  return numero * 2;
}
let resultadototal = 200;
console.log("Resultado do dobro:", resultado);
