// 1#
let idade =17;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
// 2#
let nota = 8 
if (nota >=7) {
    console.log("Aprovado!!")
} else {
    console.log("Reprovado")
}
// 3#
let numero =-5
if (numero >=0) {
    console.log("positivo chefe!!")
} else {
    console.log("negativo")
}
//4#
let operacao =8
if (operacao % 2 === 0) {
    console.log("par parca")
} else [
    console.log("impar")
]
//5#
let notaGeral = 8;
let frequencia = 80;
if (notaGeral >= 7 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
//6#
let valorCompra = 400;
let possuiCartao = true;

if (valorCompra > 500 || possuiCartao == true) {
    console.log("Desconto concedido");
} else {
    console.log("Desconto não concedido");
}
//7#
let usuario = "admin"
let senha = "1234"
if (usuario=="admin" && senha=="1234"){
    console.log("pode entrar na sua conta")
} else {
    console.log("login errado")
}
//8#
let anos = 25;

if (anos <= 12) {
    console.log("Criança");
} else if (anos<= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}
//9#
let compra = 250;
let clienteVIP = true;

if (compra >= 300 || clienteVIP) {
    console.log("Frete grátis");
} else {
    console.log("Frete pago");
}
//10#
let faixaEtaria = 21;
let possuiIngresso = true;

if (faixaEtaria >= 18 && possuiIngresso) {
    console.log("Liberada");
} else {
    console.log("Bloqueada");
}
//desafio final
let nome = "Carlos";
let etario = 18;
let provas= 8;
let presenca = 80;

if (etario>= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

if (provas >= 7) {
    console.log("Nota suficiente");
} else {
    console.log("Nota insuficiente");
}

if (presenca >= 75) {
    console.log("Frequência suficiente");
} else {
    console.log("Frequência insuficiente");
}

if (provas>= 7 && presenca >= 75) {
    console.log("Situação: APROVADO");
} else {
    console.log("Situação: REPROVADO");
}