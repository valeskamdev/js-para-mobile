/*
  Podemos usar "alias/apelidos" com o comando "as" para evitar
  conflitos entre módulos de mesmo nome
 */

import { pessoa, livro, alunos as reprovados } from './modules/dados.js';
import alunos from './modules/alunos.js';

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