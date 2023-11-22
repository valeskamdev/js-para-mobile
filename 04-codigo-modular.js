/*
  Podemos usar "alias/apelidos" com o comando "as" para evitar
  conflitos entre módulos de mesmo nome
 */

import { pessoa, livro, alunos as reprovados } from './modules/dados.js';
import alunos from './modules/alunos.js';
import {converteMaisculas, converteMinusculas, formataMoeda } from './modules/funcoes.js';

console.log("\n");
console.log(reprovados); // usando módulo alunos através de apelido

console.log("\n");
console.log(alunos); // usando o nome original do módulo

console.log(pessoa);
console.log(pessoa.nome);

console.log("\n");

for (const pessoaKey in pessoa) {
  console.log(pessoa[pessoaKey]);
}

console.log("\n");

console.log(livro);
console.log(livro.volume);

for (const livroKey in livro) {
  console.log(livro[livroKey]);
}

console.log("\n");

console.log(converteMaisculas(reprovados[0]));
console.log(converteMinusculas(alunos[0]));

let preco1 = 1200.88;
let preco2 = 1000000.75;
let preco3 = 500.8452;

console.log(formataMoeda(preco1));
console.log(formataMoeda(preco2));
console.log(formataMoeda(preco3));