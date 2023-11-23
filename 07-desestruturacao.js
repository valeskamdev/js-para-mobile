/*
  Destructuring ou Desestruturação

  Extrair os dados de arrays e objetos para váriavéis/constantes individuais.
 */

// Destructuring em arrays
const alunas = ["Tanaka", "Zimbo", "Melissa"];

// const tanaka = alunas[0];
// const zimbo = alunas[1];
// const melissa = alunas[2];

const [tanaka, zimbo, melissa] = alunas; // Destructuring

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

console.log("\n");

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
const [penha, tatuape, , saoMiguel] = unidades;  // pulando um item do array ( PODENDO COLOCAR QUALQUER NOME NA VARIÁVEL )

console.log(penha);
console.log(tatuape);
console.log(saoMiguel);

console.log("\n");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("\n");

const recursos = [
  ["Notebook", "Tv Led", "Computador Desktop"],
  text => text.toUpperCase(),
];

console.log(recursos);

const [produtos, converter] = recursos;

// Acessando através da constante que foi gerada oelo destructuring
console.log(produtos[1]); // Tv Led

for (const produto of produtos) {
  console.log("Produto: " + produto);
}

console.log(converter("Eliseu"));
console.log(converter("Katia"));
console.log(converter(produtos[0]));

console.log("\n");

const pessoa = {
  nome: "Andre",
  idade: 19,
  bairro: "Penha",
  situacao: "crítica"
}

const { nome, idade, bairro, situacao } = pessoa; // Destructuring em objetos ( ACESSADO SOMENTE ATRAVÉS DO NOME DA PROPRIEDADE )

console.log(`O aluno ${nome} está em situação ${situacao} no curso.`);
console.log(`Mora na ${bairro} e mesmo assim sempre atrasado...`);

console.log("\n");

// Criando um apelido para a propriedade 'codigo'
const { codigo: pedido, cursos, preco } = { codigo: "123abc", cursos: ["Figma", "Node.js"], preco: 1000 }

console.log(pedido); // pedido é o apelido para a propriedade 'codigo'
console.log(cursos);
console.log(preco);

console.log("\n");

// Destrucuring para parâmetros de função

function exibirDados({ titulo, ano }) {
  console.log(`Filme: ${titulo} - Ano: ${ano}`);
}

const filme1 = {
  titulo: "Vingadores",
  ano: 2012
}

const filme2 = {
  titulo: "Barbie",
  ano: 2023
}

exibirDados(filme1);
exibirDados(filme2);