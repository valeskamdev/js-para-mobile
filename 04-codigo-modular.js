import pessoa from './modules/dados.js';

console.log(pessoa);
console.log(pessoa.nome);

console.log("\n");

for (const pessoaKey in pessoa) {
  console.log(pessoa[pessoaKey]);
}