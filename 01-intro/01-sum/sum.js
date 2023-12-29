function sum(a, b) {
  const result = a + b;

  if (typeof result !== 'number') throw new TypeError('');

  return result;
}

module.exports = sum;
