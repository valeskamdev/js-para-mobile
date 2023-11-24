/*
  Reduce (reduzir, redução)

  Passar por elementos de um array (usando uma função callback com parâmetros,
  e um parâmetro com valor inicial) e retorna um único valor/resultado.
  Pode ser útil para operações matemáticas que geram um único resultado.
 */

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];

const total = valores.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);

console.log(valores);
console.log(total); // 1265

// Sem reduce com for
let acumuladora1 = 0;

for (let i = 0; i < valores.length; i++) {
  acumuladora1 += valores[i];
}

console.log(acumuladora1); // 1265

// Sem reduce com for/of
let acumuladora2 = 0;

for (const valor of valores) {
  acumuladora2 += valor;
}

console.log(acumuladora2); // 1265