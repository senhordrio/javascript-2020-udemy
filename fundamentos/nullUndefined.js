let valor //não inicializada
console.log(valor)

valor = null; //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco - forma mais adequada de excluir um objeto
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)