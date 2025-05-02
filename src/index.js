const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar(1, 2)).toBe(3); // 1 + 2 = 3
});

test("Soma dois números negativos corretamente", () => {
  expect(somar(-1, -2)).toBe(-3); // -1 + -2 = -3
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(5, 3)).toBe(2); // 5 - 3 = 2
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(3, 5)).toBe(-2); // 3 - 5 = -2
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(2, 3)).toBe(6); // 2 * 3 = 6
});

test("Multiplica número por zero", () => {
  expect(multiplicar(0, 5)).toBe(0); // 0 * 5 = 0
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(6, 3)).toBe(2); // 6 / 3 = 2
});

test("Lança erro ao dividir por zero", () => {
  expect(() => dividir(5, 0)).toThrow("Não é possível dividir por zero");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(4)).toBe(true); // 4 é par
});

test("Verifica se o número é ímpar", () => {
  expect(ehPar(3)).toBe(false); // 3 é ímpar
});
