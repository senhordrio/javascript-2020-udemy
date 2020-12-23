const escola = "UFLA"

console.log(escola.charAt(2))//posicao do caracter
console.log(escola.charAt(5))//Imprime vazio
console.log(escola.charCodeAt(3))//tabela UNICODE
console.log(escola.indexOf('A'))//index do caracter
console.log(escola.substring(1))//a partir de um index
console.log(escola.substring(0,2))//intervalo tirando index superior
console.log('Escola '.concat(escola).concat("!"))//concatenação
console.log('Escola ' + escola + "!")//concatenação
console.log(escola.replace(/UFLA/, 'UFMG'))//cria uma nova string substituindo a string passada como parametro para algo desejado
console.log(escola.replace(2, 'R'))//Não funcionou como na aula
console.log(escola);

console.log('Ana, Maria, Pedro'.split(','))//gera um array separando por vírgulas