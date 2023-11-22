const nome = "Agatha";
const sobrenome = "Marques";

let idade = 16;
let cidade = "São Paulo";
let estado = "SP";

/*
* Concatenação tradicional usando operador + Meu nome é Agatha Giovanna,
*  tenho 16 anos e moro atualmente na cidade de São Paulo - SP.  */

/*
  Concatenação tradicional usando operador + Meu nome é Agatha Giovanna,
  tenho 16 anos e moro atualmente na cidade de São Paulo - SP.
*/

let mensagem1 = "Meu nome é " + nome + " " + sobrenome + ", tenho "
  + idade + " anos e moro atualmente na cidade de " + cidade + " - " + estado + ".";

console.log(mensagem1);

/* Template Literal/String */

let mensagem2 = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. Sou ${idade >= 18 ? "maior" : "menor"} de idade.`;

console.log(mensagem2);