//1
let pessoa = {
  nome: "pedro otavio,",
  idade: "16,",
  cidade: "SP",
};
console.log(pessoa.nome, pessoa.idade, pessoa.cidade);
//2
let produto = {
  produto: "bala de yorgute",
  preco: "50 centavos",
};
console.log(produto.produto, produto.preco);
//3
let carro = {
  marca: " Chevrolet,",
  modelo: " Chevrolet vectra,",
  ano: "2012",
};
carro.cor = "prata";
console.log(carro.marca, carro.modelo, carro.ano);
//4
let aluno = {
  nome: "otavio,",
  nota1: "9,",
  nota2: "6",
};
console.log(aluno.nome, aluno.nota1, aluno.nota2);

//5
let computador = {
  marca: "intel",
  processador: "intel Core i7-14700F",
  memoria: "8Gbz",
};
computador.memoria = "16Gbz";
computador.armazenamento = "HDD";
console.log(computador);
//6
let cadastro = {
  aluno: "pedro",
  idade: 17,
  curso: "desenvolvimento de sistemas",
  nota: 7,
};
console.log(cadastro);
cadastro.nota = 8;
delete cadastro.idade;
cadastro.cidade = "sp";
console.log(cadastro);
//7
let produto2 = {
  nome: "Mouse",
  preco: 100,
  desconto: 15,
};
const precoFinal = produto2.preco - (produto2.preco * produto2.desconto) / 100;
console.log(`Preço original: R$ ${produto2.preco}`);
console.log(`Desconto: ${produto2.desconto}%`);
console.log(`Preço final: R$ ${precoFinal}`);
//8
let alunos = [
  { nome: "Ana", idade: 16, nota: 8 },
  { nome: "João", idade: 17, nota: 7 },
  { nome: "Maria", idade: 15, nota: 9 },
  { nome: "Pedro", idade: 18, nota: 9 },
  { nome: "Luiza", idade: 16, nota: 10 },
];

for (let aluno of alunos) {
  console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`);
}
//9
let loja = {
  nome: "Teclado",
  preco: 150,
  estoque: 10,
};
loja.estoque -= 2;
loja.preco = 130;
loja.categoria = "Periféricos";
console.log(loja);
//10
let estudante = {
  nome: "Mariana",
  idade: 20,
  curso: "Desenvolvimento de Sistemas",
};
console.log(estudante);
let propriedade = ("curso:", estudante.curso);
console.log(propriedade);
propriedade = ("nome:", estudante.nome);
console.log(propriedade);

//11
const alunosComNotas = [
  { nome: "Ana", idade: 16, nota1: 8, nota2: 7 },
  { nome: "João", idade: 17, nota1: 7, nota2: 8 },
  { nome: "Maria", idade: 15, nota1: 9, nota2: 10 },
  { nome: "Pedro", idade: 18, nota1: 6, nota2: 7 },
  { nome: "Luiza", idade: 16, nota1: 10, nota2: 9 },
];
console.log(alunosComNotas);

for (let aluno of alunosComNotas) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const situacao = media >= 6 ? "Aprovado" : "Reprovado";
  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média: ${media}`);
  console.log(`Situação: ${situacao}`);
}
//12
let produtos = [
  { nome: "Teclado", preco: 150, estoque: 10, categoria: "Periféricos" },
  { nome: "Mouse", preco: 80, estoque: 15, categoria: "Periféricos" },
  { nome: "Monitor", preco: 700, estoque: 5, categoria: "Eletrônicos" },
  { nome: "Cabo USB", preco: 25, estoque: 30, categoria: "Acessórios" },
  { nome: "Webcam", preco: 200, estoque: 8, categoria: "Eletrônicos" },
];

console.log("Produtos em estoque:");
for (let produto of produtos) {
  if (produto.estoque > 0) {
    console.log(`${produto.nome} - Estoque: ${produto.estoque}`);
    const valorTotal = produto.preco * produto.estoque;
    console.log(`Valor total em estoque: R$ ${valorTotal}`);
  }
}

//13
let carrinho = [
  { produto: "Mouse", preco: 100, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
];

let totalCarrinho = 0;
for (let item of carrinho) {
  const subtotal = item.preco * item.quantidade;
  totalCarrinho += subtotal;
  console.log(`${item.produto}: R$ ${subtotal}`);
}
console.log(`Total: R$ ${totalCarrinho}`);

//14
let funcionarios = [
  { nome: "Ana", cargo: "Analista", salario: 3500 },
  { nome: "João", cargo: "Suporte", salario: 2800 },
  { nome: "Maria", cargo: "Gerente", salario: 6000 },
  { nome: "Pedro", cargo: "Designer", salario: 3200 },
  { nome: "Luiza", cargo: "Dev", salario: 4500 },
];

console.log("Funcionários com salário > R$ 3000:");
for (let funcionario of funcionarios) {
  if (funcionario.salario > 3000) {
    console.log(`${funcionario.nome} - ${funcionario.cargo} - R$ ${funcionario.salario}`);
  }
}

let somaSalarios = 0;
for (let funcionario of funcionarios) {
  somaSalarios += funcionario.salario;
}
let mediaSalarial = somaSalarios / funcionarios.length;
console.log(`Média salarial: R$ ${mediaSalarial.toFixed(2)}`);

//15
let turma = [
  { nome: "Ana", idade: 16, curso: "JS", nota1: 8, nota2: 9 },
  { nome: "Carlos", idade: 17, curso: "JS", nota1: 5, nota2: 6 },
  { nome: "Mariana", idade: 15, curso: "JS", nota1: 9, nota2: 9 },
  { nome: "Pedro", idade: 16, curso: "JS", nota1: 7, nota2: 6 },
  { nome: "Joana", idade: 18, curso: "JS", nota1: 6, nota2: 7 },
];

let totalMedias = 0;
let maiorMedia = null;
let menorMedia = null;
let aprovados = [];

for (let aluno of turma) {
  aluno.media = (aluno.nota1 + aluno.nota2) / 2;
  aluno.situacao = aluno.media >= 6 ? "Aprovado" : "Reprovado";
  totalMedias += aluno.media;

  if (maiorMedia === null || aluno.media > maiorMedia.media) {
    maiorMedia = aluno;
  }

  if (menorMedia === null || aluno.media < menorMedia.media) {
    menorMedia = aluno;
  }

  if (aluno.situacao === "Aprovado") {
    aprovados.push(aluno);
  }
}

console.log("===== RELATÓRIO DA TURMA =====");
for (let aluno of turma) {
  console.log(`\nAluno: ${aluno.nome}`);
  console.log(`Média: ${aluno.media}`);
  console.log(`Situação: ${aluno.situacao}`);
}
console.log("===============================");
console.log(`Maior média: ${maiorMedia.nome} - ${maiorMedia.media}`);
console.log(`Menor média: ${menorMedia.nome} - ${menorMedia.media}`);
console.log(`Média da turma: ${(totalMedias / turma.length).toFixed(1)}`);
console.log("Alunos aprovados:");
for (let aluno of aprovados) {
  console.log(`${aluno.nome} - ${aluno.media}`);
}

console.log("Objeto final dos alunos:");
console.log(turma);
