const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const chineses = f => f.pais === "China"
const mulheres = f => f.genero === "F"
const menorSalario = (funcionario, funcAtual) => {
  return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)
  const chinesaMenorSalario = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  console.log(chinesaMenorSalario)
})
