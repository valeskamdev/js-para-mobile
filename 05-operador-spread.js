/*
  ...spread -> espalhar

  Copiar elementos/dados de um array/objeto para dentro de outro array/objeto.
 */

const bandaProg = ["Pink Floyd", "Rush", "Yes"];
const maisBandas = [...bandaProg, "Slayer", "Nightwish"]; // Copia os elementos do array bandaProg para o array maisBandas

console.log(bandaProg);
console.log(maisBandas); // ["Pink Floyd", "Rush", "Yes", "Slayer", "Nightwish"]