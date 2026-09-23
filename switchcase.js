let erros = "401"    

switch(erros) {
    case "401":
    console.log("401: Não autorizado: Credenciais inválidas.")
    break;
    case "403":
        console.log("Acesso negado: Você não tem permissão para acessar esta página.");
     break;
    case "404":
        console.log( "Página não encontrada.")   
     break;
    default:
        console.log( "Erro desconhecido. Entre em contato com o suporte.");        
}
//1.2
let materias="martelo"

switch (materias){
    case "serra":
        console.log("ferramentas eletricas")
    break;
    case "furradeira":
        console.log("ferramentas eletricas")
    break;
    case "martelo":
        console.log("ferramentas manuais");
    break;
    case "chave de fenda":
        console.log("ferramentas manuais");
    break 
    default:
        console.log("nao tem essa chefao do crime")                
}
//1.3
let maquina = "ligada"

switch (maquina){
    case "ligada":
        console.log("Máquina em operação.")
    break;
    case "desligada" :
        console.log( "Máquina inativa.")   
    break;
    case "manutencao" :
        console.log("Aguardando reparo.")   
    break;
    default:
        console.log("erro")    
}
//1.4
let turno ="19"
switch (turno){
    case "8h":
        console.log("matutino dog")
        break;
    case "13h":
        console.log("vespertino mn")
        break;
    case "19h":
        console.log("noturno bb")
        break;
    default:
        console.log("nao tem esse turno")            
}
//1.5
let aluno = "b"
switch (aluno){
    case "a":
        console.log("aluno excelente")
        break;
    case "b":
        console.log("aluno bom")
        break;
    case "c":
        console.log("aluno regular")
        break;
    case "d":
        conosel.log("aluno precisa melhorar")
        break;
    default:
        console.log("invalido")                 
}
//2.0
let meta = 50;
let bonus;

switch (meta) {
    case 1:
        bonus = 50;
        break;

    case 2:
        bonus = 100;
        break;

    case 3:
        bonus = 250;
        break;

    default:
        bonus = 0;
}
//2.2
let mes = 4;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mês tem 31 dias.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mês tem 30 dias.");
        break;
    case 2:
        console.log("Este mês tem 28 ou 29 dias (depende se o ano é bissexto).");
        break;
    default:
        console.log("Mês inválido.");
}
//2.3
let numero = 4;
switch (numero) {
    case 0:
        console.log(1);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(6);
        break;

    case 4:
        console.log(24);
        break;
    case 5:
        console.log(120);
        break;
    default:
        console.log("nao da para calcular isso");
}
//2.4
let palavra = "mouse";
let idioma = "es";
switch (palavra) {
    case "mouse":
        switch (idioma) {
            case "es":
                console.log("ratón");
                break;
            case "fr":
                console.log("souris");
                break;
            default:
                console.log("Tradução não disponível.");
        }
        break;
    case "teclado":
        switch (idioma) {
            case "es":
                console.log("teclado");
                break;
            case "fr":
                console.log("clavier");
                break;
            default:
                console.log("Tradução não disponível.");
        }
        break;
    default:
        console.log("Tradução não disponível.");
}
//2.5
let condicaoClimatica = "sol";
switch (condicaoClimatica) {
    case "sol":
        console.log("Hoje está ensolarado. Use protetor solar.");
        break;

    case "chuva":
        console.log("Hoje está chovendo. Leve um guarda-chuva.");
        break;

    case "nublado":
        console.log("Hoje está nublado. O tempo está bom para uma caminhada.");
        break;

    case "neve":
        console.log("Hoje está nevando. É um bom dia para ficar em casa.");
        break;

    default:
        console.log("Condição climática desconhecida.");
}
//3.1
let num1 = 10;
let num2 = 5;
let operacao = "*";
switch (operacao) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 == 0) {
            console.log("Não é possível dividir por zero.");
        } else {
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("Operação inválida.");
}
let media = 8;
let conceito;

switch (true) {
    case media >= 9:
        conceito = "A";
        break;

    case media >= 7:
        conceito = "B";
        break;

    case media >= 5:
        conceito = "C";
        break;

    default:
        conceito = "D";
}

switch (conceito) {
    case "A":
        console.log("Parabéns, você é um aluno de alto desempenho!");
        break;

    case "B":
        console.log("Muito bem, seu desempenho é bom!");
        break;

    case "C":
        console.log("Seu desempenho é regular. Continue se esforçando!");
        break;

    case "D":
        console.log("Seu desempenho está abaixo do esperado. Procure ajuda do instrutor.");
        break;
}
let compra = 150;
let descontoPercentual;

switch (true) {
    case compra >= 50 && compra <= 99:
        descontoPercentual = 5;
        break;

    case compra >= 100 && compra <= 199:
        descontoPercentual = 10;
        break;

    case compra >= 200:
        descontoPercentual = 15;
        break;

    default:
        descontoPercentual = 0;
}

let valorFinal;

switch (descontoPercentual) {
    case 5:
        valorFinal = compra * 0.95;
        break;

    case 10:
        valorFinal = compra * 0.90;
        break;

    case 15:
        valorFinal = compra * 0.85;
        break;

    default:
        valorFinal = compra;
}

console.log("Valor da compra: R$ " + compra);
console.log("Desconto: " + descontoPercentual + "%");
console.log("Valor final: R$ " + valorFinal);

let idade = 20;
switch (true) {
    case idade < 12:
        console.log("Criança");
        break;
    case idade >= 12 && idade <= 17:
        console.log("Adolescente");
        break;
    case idade >= 18 && idade <= 59:
        console.log("Adulto");
        break;
    case idade >= 60:
        console.log("Idoso");
        break;
        default:
            console.log("erro");
}
let acao = "coletarItem";
let multiplicador = 3;
let pontos;
switch (acao) {
    case "coletarItem":
        switch (multiplicador) {
            case 1:
                pontos = 5;
                break;
            case 2:
                pontos = 10;
                break;
            case 3:
                pontos = 15;
                break;
        }
        break;
    case "depositarItem":
        switch (multiplicador) {
            case 1:
                pontos = 10;
                break;
            case 2:
                pontos = 20;
                break;
            case 3:
                pontos = 30;
                break;
        }
        break;
    case "tocarParede":
        switch (multiplicador) {
            case 1:
                pontos = -5;
                break;
            case 2:
                pontos = -10;
                break;
            case 3:
                pontos = -15;
                break;
        }
        break;
}

console.log("Total de pontos: " + pontos);