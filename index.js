//index.js
export function basicArithmetic(a, b, operator) {
  if (operator === 'add') {
    return a + b
  } else if (operator === 'subtract') {
    return a - b
  } else {
    throw new Error('Unsupported operator')
  }
}
