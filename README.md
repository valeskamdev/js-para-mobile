# js-para-mobile

Revisão e recursos novos de JS para Mobile

## Principais tópicos de atenção e estudos

### Variáveis e Constantes

`let` e `const` possuem escopode bloco quando declarado dentro de blocos (condicionais, loops) e escopo **GLOBAL** quando declarado fora de blocos.

`var` possui escopo **GLOBAL** mesmo quando declarado dentro de blocos. Portanto, é acessível em praticamente qualquer lugar dentro da aplicação.

`const` obrigatoriamente precisa ser inicializada com algum valor/expressão, e este valor/expressão **não pode ser modificado**.

## Funções

Blocos de código reaprovetavéis que podem ser criados de pelo menos 3 formas

- Função nomeada/declarada
- Função anônima
- Arrow Function

Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow Function e Nomeada.

**Obs.:** caso utilize as sintaxes anônimas ou arrow, certifique-se de **primeiro** declarar a função para só depois chamamá-la.

## Temaplate Literal/String

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais fácil executar operações dentro de strings/códigos. Lembre-se do uso das **crases** e do bloco `${}` para execuções de código dinâmico (variaáveis, constantes, funções etc). 

## Módulos

São uma maneira de separar lógicas/funcionalidades/dados em arquivos dedicados. Ao criar módulos é necessário utilizar os comandos `export` (no módulo a ser importado) e `import` (no arquivo em que você quer usar o módulo).

Ao exportar apenas **um recurso**, utiliza-se `export default nomeDoRecurso`. Ao exportar **um ou mais** recursos, utiliza-se `export { recurso1, recurso2, recursoN }`.

Ao importar apenas ** um recurso** utiliza-se `import nomdeDoRecurso from "./local/nomeDoModulo"`. Ao importar **um ou mais** recursos, utiliza-se `export { recurso1, recursoN } from "./local/nomeDoModulo"`.