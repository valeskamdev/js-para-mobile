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
const [penha, tatuape, , saoMiguel] = unidades;  // pulando um item do array

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