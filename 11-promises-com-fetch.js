
/*
  Comunicação assíncrona (AJAX) para carregamento de dados
  usando fetch/then/catch
 */

const api_url = `https://jsonplaceholder.typicode.com/users/3`;

function acessaApi() {
  // Conecte/Acesse..
  fetch(api_url)
    // ... e então captura resposta da API no formato JSON
    .then(response => {
      /*
      Se a resposta da requisição não for bem-sucedida ( por exemplo,
      se não hoouver registros, ou se der erro no próprio server [500]
       */
      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`,
        );
      }
      return response.json();
    })
    //... e então capture os dados contidos na resposta
    .then(json => console.log(json))
    // Em caso de erro (acesso, no json, gerais) capture o erro
    .catch(error => {
      console.error('Erro na operação: ' + error.message);
    });
}

acessaApi();