//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele deve retornar false.

var a = 1;
var b = 3;
var c = 5;

var isEven = false;

if ((a % 2 == 0 || b % 2 == 0 || c % 2 == 0)) {
  isEven = true;
};
console.log(isEven);