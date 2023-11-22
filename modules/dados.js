const pessoa = {
  nome: 'Agatha Giovanna',
  idade: 16,
  cidade: 'São Paulo'
}

const livro = {
  titulo: "O Senhor dos Anéis",
  volume: "As Duas Torres",
  ano: 1954
}

const alunos = ["Tanaka", "Victor", "Eliel", "Aline"];

/*
  Se for exportação de somente UM recurso usamoas export default nomeDoRecurso
*/
// export default pessoa;

/*
  Se for exportação de VÁRIOS recursos usamoas somente o export { entre chaves os recursos }
*/
export { pessoa, livro, alunos };