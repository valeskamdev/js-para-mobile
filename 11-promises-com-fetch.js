
/*
  Comunicação assíncrona (AJAX) para carregamento de dados
  usando fetch/then/catch
 */

const api_url = `https://jsonplaceholder.typicode.com/users/3`;

// Conecte/Acesse..
fetch(api_url)
  // ... e então captura resposta da API no formato JSON
  .then(response => response.json())
  //... e então capture os dados contidos na resposta
  .then(json => console.log(json))
  // Em caso de erro (acesso, no json, gerais) capture o erro
.catch(error => {
  console.error("Erro na operação: " + error.message);
})