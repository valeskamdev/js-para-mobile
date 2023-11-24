/*
  filter (filtrar)

  Passa por elementos de uma array (usando uma função callback) e retornar
  valores de acordo com um ou mais condições gerando um novo array
 */

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;

const vendasAcimaDaMeta = vendas.filter(venda => venda >= meta);

console.log(vendas);
console.log(vendasAcimaDaMeta);

console.log("\n");

// Exemplo 2
const alunos = ["Nicolas", "Eliel", "André", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "Mônica", "Marcelo"];
const resultados = alunos.filter(aluno => aluno.startsWith("M") && aluno.endsWith("o")); // startsWith = começa com, endsWith = termina com

console.log(alunos);
console.log(resultados);