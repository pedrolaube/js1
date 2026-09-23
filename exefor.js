//1
let alunos = ["pedro", "otavio", "roger", "yuri", "marisa"];
for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}
//2
let tabuada = 5;

for (let i = 1; i <= 10; i++) {
  console.log(tabuada + " x " + i + " = " + tabuada * i);
}
//3
let notas = [6, 7, 9, 7, 8];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;
console.log("A média das notas é: " + media);
//4
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//5
console.log("os numeros pares sao:")
for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }
}
//6
let materias = ["lapis","caderno","caneta","borracha","estojo","apontador","regua",
];
console.log( "precisaram dos seguintes materias:");
for (let i =0; i < materias.length; i++ ) {
    console.log(materias[i])
}
let N = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma = soma + i;
}
console.log(soma);
