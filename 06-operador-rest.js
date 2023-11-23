/*
  Conceito

  Usando o ... (rest operator) podemos mesclar uma lista de
  parâmetros/argumentos para a função
 */

const cientistas = ["Tesla", "Einstein", "Newton", "Darwin"];
const artistas = ["Da Vinci", "Van Gogh", "Mozart", "Picasso", "Gauguin", "Matisse"];

// Usando o rest operator (...parametros) podemos mesclar uma lista de parâmetros/argumentos para a função
const classificar = (...parametros) => {
    return parametros.sort();
}

console.log(classificar(...cientistas)); // spread (espalha os elementos do array)
console.log(classificar(...artistas)); // spread