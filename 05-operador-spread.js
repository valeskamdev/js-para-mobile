/*
  ...spread -> espalhar

  Copiar elementos/dados de um array/objeto para dentro de outro array/objeto.
 */

const bandaProg = ["Pink Floyd", "Rush", "Yes"];
const maisBandas = [...bandaProg, "Slayer", "Nightwish"]; // Copia os elementos do array bandaProg para o array maisBandas

console.log(bandaProg);
console.log(maisBandas); // ["Pink Floyd", "Rush", "Yes", "Slayer", "Nightwish"]

// Spread com objetos

const cliente = {
  nome: "Seu Madruga",
  cidade: "São Paulo",
  idade: 55
}

const novosDados = {
  ...cliente, // Copia os dados do objeto cliente para o objeto novosDados
  estado: "SP",
  pedido: "123xyz",
  total: 5000.88,
  idade: 34 // Sobrescreve o valor da propriedade idade do objeto cliente
}

console.log(novosDados);