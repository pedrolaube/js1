let a = 10;
let b = 3;

console.log(a + b); // Adição: 13
console.log(a - b); // Subtração: 7
console.log(a * b); // Multiplicação: 30
console.log(a / b); // Divisão: 3.33
console.log(a % b); // Módulo: 1

let x = 5;
x++; // Incrementa 1
console.log(x); // 6
x--;
console.log(x); // 5

x += 5; // Equivalente a x = x + 5
console.log(x); // 15

x *= 2; // Equivalente a x = x * 2
console.log(x); // 30

console.log(5 == "5"); // true (compara apenas o valor)
console.log(5 === "5"); // false (compara valor e tipo)
console.log(5 != 8); // true
console.log(5 !== "5"); // true (valor e tipo são diferentes)

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true

//javascript
//Copiar código
a = true;
 b = false;

console.log(a && b); // false (ambos precisam ser verdadeiros)
console.log(a || b); // true (pelo menos um precisa ser verdadeiro)
console.log(!a); // false (negação de a, que é true)

//javascript
//Copiar código
let idade = 18;
let podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir); // Pode dirigir