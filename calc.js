let informacoes = {
  num1: 5,
  num2: 10,
};

console.log("Informações:", informacoes);

function somar(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

let resultadoAdicao = somar(informacoes.num1, informacoes.num2);
let resultadoSubtracao = subtrair(informacoes.num1, informacoes.num2);
let resultadoMultiplicacao = multiplicar(informacoes.num1, informacoes.num2);
let resultadoDivisao = dividir(informacoes.num1, informacoes.num2);

console.log("Resultado da adição:", resultadoAdicao);
console.log("Resultado da subtração:", resultadoSubtracao);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Resultado da divisão:", resultadoDivisao);
