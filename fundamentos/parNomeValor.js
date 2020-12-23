// par nome/valor ou chave/valor

const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Faaala' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: "Drio",
    idade: 25,
    peso: 70,
    endereco: {
        logradouro: 'Rua José de Aguiar',
        numero: 57
    } 
}

console.log(saudacao)
console.log(exec())
console.log(cliente)