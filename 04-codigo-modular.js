import { pessoa, livro } from './modules/dados.js';

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