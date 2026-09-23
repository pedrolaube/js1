let informacoes = {
  nome: "pedro",
  idade: 17,
  semestre: 2,
  curso: "ADS",
};
console.log("cadastro do aluno:", informacoes);
//segundo exercicio
let valores = {
  valorteclado: 150,
  valormouse: 80,
};
console.log("valores dos produtos:", valores);

function somar() {
  return valores.valorteclado + valores.valormouse;
}

let resultado = somar();
console.log("resultado da soma dos produtos:", resultado);

//terceiro exercicio
let compras = {
  valorpagar: 67.5,
  valorpago: 100,
};
console.log("valor a pagar e valor pago:", compras);
function troco() {
  return compras.valorpago - compras.valorpagar;
}
let resultadoTroco = troco();
console.log("resultado do troco:", resultadoTroco);
//quarto exercicio
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("fahrenheit:", fahrenheit);

//quinto exercicio
let medidas = {
  comprimento: 10,
  largura: 8,
};

console.log("medidas do retangulo:", medidas);
function area() {
  return medidas.comprimento * medidas.largura;
}

let ressultadoarea = area();
console.log("resultado da area da sala:", ressultadoarea);

//sexto exercicio
let dinheiro = {
  valor: 3500,
  aumento: 8,
};

console.log("valor do salario e aumento:", dinheiro);
function aumentoSalario() {
  return dinheiro.valor + (dinheiro.valor * dinheiro.aumento) / 100;
}
let resultadoaumento = aumentoSalario();
console.log("resultado do salario final:", resultadoaumento);

//setimo exercicio
let produto = {
  valor: 4000,
  desconto: 15,
};
console.log("valor do produto e desconto:", produto);

function descontoproduto() {
  return produto.valor - (produto.valor * produto.desconto) / 100;
}
let resultadodesconto = descontoproduto();
console.log("resultado do desconto:", resultadodesconto);

//oitavo exercicio
let pedro = {
  nota1: 8,
  nota2: 7,
  nota3: 9,
};
console.log("notas dos alunos:", pedro);
function media() {
  return (pedro.nota1 + pedro.nota2 + pedro.nota3) / 3;
}
let resultadomedia = media();
console.log("media do pedro:", resultadomedia);

//nono exercicio
let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;

console.log("horas:", horas);
console.log("horas em minutos:", minutos);
console.log("horas em segundos:", segundos);
//decimo exercicio
let dados = {
  distancia: 300.0,
  gasolinaporkm: 12,
  valorcombustivel: 6,
};
console.log("Distância, gasolina por km e valor do combustível:", dados);
function quantocombustivel() {
  return dados.distancia / dados.gasolinaporkm;
}

let resultadoquantocombustivel = quantocombustivel();
console.log("Quantidade de combustível gasto:", resultadoquantocombustivel);

function valorcombustivel() {
  return dados.valorcombustivel * resultadoquantocombustivel;
}
let resultadovalorgasolina = valorcombustivel();
console.log("Valor total da gasolina:", resultadovalorgasolina);
//decima primeira exercicio
let grana = {
  num1: 100,
  num2: 200,
};
console.log("valores:", grana);
function somar(num1, num2) {
  return num1 + num2;
}
let resultadoSoma = somar(grana.num1, grana.num2);
console.log("resultado da soma:", resultadoSoma);
//decima segunda exercicio
let algarismos = {
  number1: 50,
  number2: 25,
};
console.log("algarismos:", algarismos);
function subtrair(number1, number2) {
  return number1 - number2;
}
let resultadosubtracao = subtrair(algarismos.number1, algarismos.number2);

function multiplicar(number1, number2) {
  return number1 * number2;
}
let resultadomultiplicacao = multiplicar(
  algarismos.number1,
  algarismos.number2,
);

function dividir(number1, number2) {
  return number1 / number2;
}
let resultadodivisao = dividir(algarismos.number1, algarismos.number2);

function soma(number1, number2) {
  return number1 + number2;
}
let resultadosoma = soma(algarismos.number1, algarismos.number2);

console.log("Resultado da subtração:", resultadosubtracao);
console.log("Resultado da multiplicação:", resultadomultiplicacao);
console.log("Resultado da divisão:", resultadodivisao);
console.log("Resultado da soma:", resultadosoma);
//decima terceira exercicio
let notas = [8, 7, 9, 7];
console.log("notas dos alunos:", notas);
function media() {
  return (8 + 7 + 9 + 7) / 4;
}
let resultadoMedia = media();
console.log("media do aluno:", resultadoMedia);
// decima quarto exercicio
let salario = {
  valor: 3000,
  bonus: 500,
};
console.log("salario e bonus:", salario);
function salarioFinal() {
  return salario.valor + salario.bonus;
}
let resultadoSalarioFinal = salarioFinal();
console.log("Salário final:", resultadoSalarioFinal);
//decima quinto exercicio
let hardware = {
  valor: 4000,
  desconto: 10,
};
console.log("valor do hardware e desconto:", hardware);
function descontoHardware() {
  return hardware.valor - (hardware.valor * hardware.desconto) / 100;
}
let resultadoDescontoHardware = descontoHardware();
console.log("Valor do hardware com desconto:", resultadoDescontoHardware);
//decima sexto exercicio
let curso = {
  preco: 1200,
  parcelas: 6,
  valordaparcela: 200,
};
console.log("informacoes do curso:", curso);

//decima setimo exercicio
let empenhonotrabalho = {
  valorVendas: 20000,
  percentual: 5,
};
function calcularComissao(valorVendas, percentual) {
  return (valorVendas * percentual) / 100;
}
let valorComissao = calcularComissao(
  empenhonotrabalho.valorVendas,
  empenhonotrabalho.percentual,
);
console.log("Total vendido: R$", empenhonotrabalho.valorVendas);
console.log("Comissão:", empenhonotrabalho.percentual + "%");
console.log("Valor da comissão: R$", valorComissao);
//decimo oitavo exercicio
function calcularPagamento(horas, valorHora) {
  return horas * valorHora;
}

let horasTrabalhadas = 160;
let valorHora = 25;
let pagamento = calcularPagamento(horasTrabalhadas, valorHora);

console.log("Horas trabalhadas:", horasTrabalhadas);
console.log("Valor por hora: R$", valorHora);
console.log("Pagamento: R$", pagamento);
//decimo nono exercicio
function boletim(nome, nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  console.log("========================");
  console.log("          BOLETIM");
  console.log("========================");
  console.log("Aluno:", nome);
  console.log("Nota 1:", nota1);
  console.log("Nota 2:", nota2);
  console.log("Nota 3:", nota3);
  console.log("Média:", media);
}

boletim("Mariana", 8, 7, 9);
//vigesimo exercicio
let computador = {
  processador: 1200,
  memoriaRam: 500,
  ssd: 600,
  placaDeVideo: 2000,
  percentualDesconto: 10,
  parcelas: 12,
};

function calcularTotal() {
  return (
    computador.processador +
    computador.memoriaRam +
    computador.ssd +
    computador.placaDeVideo
  );
}

function calcularDesconto() {
  return (calcularTotal() * computador.percentualDesconto) / 100;
}

function calcularValorFinal() {
  return calcularTotal() - calcularDesconto();
}

function calcularParcela() {
  return calcularValorFinal() / computador.parcelas;
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

console.log("================================");
console.log("     ORÇAMENTO - PC GAMER");
console.log("================================");
console.log("Processador:", formatarMoeda(computador.processador));
console.log("Memória RAM:", formatarMoeda(computador.memoriaRam));
console.log("SSD:", formatarMoeda(computador.ssd));
console.log("Placa de vídeo:", formatarMoeda(computador.placaDeVideo));
console.log("--------------------------------");
console.log("Total:", formatarMoeda(calcularTotal()));
console.log("Desconto:", computador.percentualDesconto + "%");
console.log("Valor do desconto:", formatarMoeda(calcularDesconto()));
console.log("--------------------------------");
console.log("Valor final:", formatarMoeda(calcularValorFinal()));
console.log("À vista:", formatarMoeda(calcularValorFinal()));
console.log(computador.parcelas + "x:", formatarMoeda(calcularParcela()));
console.log("================================");
