const prod1 = {} //"{}" representa um objeto, representação literal
prod1.nome = 'Celular Moto G 5G'
prod1.preco = 2999.90
prod1['Desconto maneiro'] = 0.40 //evitar fazer essa coisa feia

console.log(prod1)

const prod2 = {
    nome: "Playstation 5",
    preco: 4990.90,
    obj: {
        hardware: "Teraflops"
    }
}

console.log(prod2)