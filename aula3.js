let alunos = [
    'João',
    'Pedro',
    'Mariana',
    'Ana'
];
console.log(alunos); 
console.log(alunos.length);
console.log(alunos[1]); 
alunos.push('Jhonny')
console.log(alunos); 
alunos[1] = 'Otavio'
console.log(alunos); 
alunos.unshift('Lucas')
console.log(alunos); 
alunos.pop()
console.log(alunos); 
alunos.shift()
console.log(alunos);
console.log(alunos.includes('Mariana'));
console.log(alunos.includes('Jhonny'));

console.log(alunos.indexOf('Ana'));
console.log(alunos.indexOf('Jhonny'));

alunos.splice(1, 1);
console.log(alunos);

alunos.splice(1, 1, 'Pedro');
console.log(alunos);
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
let notas = [7, 8, 9, 10];
let soma = 0;
for (let nota of notas) {
    soma = soma + nota;
}
console.log(soma);

notas = [7, 8, 9, 10];
soma = 0;

for (let nota of notas) {
    soma += nota;
}
let media = soma / notas.length;
console.log("Média:", media);
notas = [ 5, 1,  7, 8, 9, 10];

let aprovados = notas.filter(nota => nota >= 7);
console.log(aprovados);

let numeros = [1, 2, 3, 4];

let dobro = numeros.map(numero => numero * 2);
console.log(dobro);
//esses e para colocar em ordem alfabetica

let nomes = ["Carlos", "Ana", "João", "Bruno"];
nomes.sort();
console.log(nomes);
//agora vai juntar os elementos

let amigos = ["João", "Maria", "Pedro"];
console.log(amigos.join(" - "));

 alunos= ["João", "Maria", "Pedro"];

alunos.reverse();
console.log(alunos);