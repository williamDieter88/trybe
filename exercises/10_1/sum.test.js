/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

const sum = require('./sum');
const { TestScheduler } = require('jest');

describe('sum', () => {
    test('4 plus 5 equals 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('throws an error when a string is passed', () => {
        expect(() => {
          sum(4, '5');
        }).toThrow();
      });
    
      test('0 plus 0 equals 0', () => {
        expect(sum(0, 0)).toBe(0);
      });
    
      test('error message is "parameters must be numbers"', () => {
        expect(() => {
          sum(4, '5');
        }).toThrow(/parameters must be numbers/);
      });
    });
