//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 3;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < n; lineIndex++) {
  console.log(inputLine);
};