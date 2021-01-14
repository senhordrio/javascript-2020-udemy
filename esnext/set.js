//não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('Vasco').add('Palmeiras').add('Corinthians')
times.add('Flamen')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel, Júlia, Júlia, Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)