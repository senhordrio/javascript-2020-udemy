//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread como objeto
const funcionario = {nome: 'Maria', salario: 12344.40}
const clone = {ativo: true, ...funcionario}
console.log(clone) //cópia

//usar spread com array
const grupoA = ['João', 'Pedro', 'Carvalho']
const grupoFinal = ['Maria', 'Jana', ...grupoA]
console.log(grupoFinal)

