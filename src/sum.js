function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('sumar() espera numeros');
  }
  return a + b;
}

module.exports = { sumar };
