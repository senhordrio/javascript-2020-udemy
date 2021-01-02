const pilotos = ['vettel', 'alonso', 'raikonen', 'massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('verstapen')
console.log(pilotos)

pilotos.shift()//remove primeiro da lista
console.log(pilotos)

pilotos.unshift('hamilton')//adiciona na primeira posicao
console.log(pilotos)

//splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Mass')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)