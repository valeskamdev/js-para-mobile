// Forma tradicionais 

/* 
    Sintaxe anônima associada à variável/constante

    Obs.: cuidado com a ordem, já que nesta sintaxe a função PRIMEIRO
    precisa ser declarada para somente DEPOIS ser chamada/executada
*/
const exemplo1 = function() {
    console.log("Função anônima!");
}

exemplo1();

/* 
    Sintaxe declarada/nomeada 

    Obs.: nesta sintaxe, você pode chamar a função antes ou depois de
    declará-la. Portanto, a ordem não importa
*/
exemplo2();

function exemplo2() {
    console.log("Função nomeada!");
}

/* 
    Exercícios

    1) Crie uma função (qualquer sintaxe) que rebeba dosi valores numéricos,
    calcule a diferença entre eles e retorne o resultado.

    2) Chame esta função duas vezes passando valores diferente e guardando-os e, variáveis
    de escopo global.

    3) Mostre os valores processados pela função no terminal.
*/

function diferancaEntreNumero(num1, num2) {
    return num1 - num2;
}

let resultado1 = diferancaEntreNumero(5, 10);
let resultado2 = diferancaEntreNumero(20, 5);

console.log(resultado1);
console.log(resultado2)


const diferancaEntreNumeroArrow = (num1, num2) => num1 - num2;

console.log(diferancaEntreNumeroArrow(50, 20));
console.log(diferancaEntreNumeroArrow(101, 6));

/* 
    Sintaxe Arrow Function
*/

const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// }

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
// const saudacao = cliente => {
//     console.log("Olá " + cliente);
// }

// Omitir as { } (SOMENTE QUUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá " + cliente);

saudacao("Fulano")
saudacao("Beltrano")

// Arrow Function padrão com retorno EXPLÍCITO
const calculeMetadeOriginal = valor => {
    return valor / 2;
};

// Arrow Function com retorno IMPLÍCITO
const calculeMetade = valor => valor / 2;

let resultadoA = calculeMetade(100);
let resultadoB = calculeMetade(741);

console.log(resultadoA);
console.log(resultadoB);

console.log("\n");
console.log("------------------------------");
console.log("\n");

/* 
    Exercícios

    1) Monte uma Arrow Function que receba um nome de uma pessoa
    e converta esse nome para letras maiúsculas.

    2) Chame a função 3x (passando nomes diferentes) e exibindo no
    console os resultados
*/

const letrasEmMaiusculo = palavra => palavra.toUpperCase();

let nome1 = letrasEmMaiusculo("Kevim")
let nome2 = letrasEmMaiusculo("Agatha")
let nome3 = letrasEmMaiusculo("Allan")

console.log(nome1);
console.log(nome2);
console.log(nome3);