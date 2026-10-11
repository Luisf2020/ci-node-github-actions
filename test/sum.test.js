const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sumar } = require('../src/sum.js');

test('suma enteros', () => {
  assert.equal(sumar(2, 3), 5);
});

test('suma negativos', () => {
  assert.equal(sumar(-4, 1), -3);
});

test('rechaza no numeros', () => {
  assert.throws(() => sumar('2', 3), TypeError);
});
