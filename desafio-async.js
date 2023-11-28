const apiUrl = `https://jsonplaceholder.typicode.com/users/`;

async function usersAPI() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}.`
      )
    }
    return await response.json();
  } catch (e) {
    console.error(`Erro: ${e.message}`)
  }
}

async function fetchData() {
  try {
    const users = await usersAPI();

    users.map( ({ name, username, email, phone, website }) => {
      let results = document.getElementById("results");
      let article = document.createElement("article");
      article.innerHTML =
        `
        <p><b>Nome:</b> ${name} ${username}</p>
        <p><b>Email:</b> ${email} </p>
        <p><b>Telefone:</b> ${phone} </p>
        <p><b>Site:</b> ${website} </p>
        <hr>
       `;
      results.appendChild(article) ;
    } )
  } catch (error) {
    console.error(error);
  }
}

fetchData();