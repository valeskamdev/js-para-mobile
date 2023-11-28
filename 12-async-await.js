/*
  Comunicação assíncrona (AJAX) para carregamento de dados
  usando fetch e a sintaxe async/await através da função (obrigatório)
 */

const apiUrl = `https://jsonplaceholder.typicode.com/photos/3`

async function acessaAPI() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      )
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro: " + error.message);
  }
}

acessaAPI();