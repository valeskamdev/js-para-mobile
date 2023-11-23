
/*
  map (mapear, mapeia - transformar em outra coisa)

  Passa po elementos de um array e realiza operações e, cada um
  deles atráves de uma função, gerando um novo array
 */

// Exemplo 1

const numeros = [10, 20, 5, 12, 66, 50];
const numerosDobrados = numeros.map(num => num * 2);

console.log(numerosDobrados);