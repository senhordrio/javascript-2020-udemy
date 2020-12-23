// novo recurso ECMA 2015

const pessoa = {
    nome: 'Drio',
    idade: 25,
    endereco: {
        logradouro: 'Rua B',
        numero: 57
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa

console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa

console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)