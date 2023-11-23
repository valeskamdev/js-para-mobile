import cursos from './modules/cursos.js';

/*
  map (mapear, mapeia - transformar em outra coisa)

  Passa po elementos de um array e realiza operações e, cada um
  deles atráves de uma função (callback), gerando um novo array
 */

// Exemplo 1

const numeros = [10, 20, 5, 12, 66, 50];
const numerosDobrados = numeros.map(num => num * 2);

console.log(numerosDobrados);
console.log('\n');

console.log(cursos);

// Exemplo 2: gerar um novo array apenas com os nomes dos cursos
const titulos = cursos.map(nome => nome.titulo);

console.log(titulos);

/*
  Exercício

  Use o map para gerar um novo array APENAS com os preços calculados com um desconto de 10%.

  Opção 1: valor - valor * 0.10
  Opção 2: valor * 0.9
 */

const precoComDesconto = cursos.map(cursos => cursos.preco * 0.9);

const precoComDesconto2 = cursos.map(curso => {
    return {
      ...curso,
      preco: curso.preco * 0.9,
    };
  },
);

console.log(precoComDesconto2);