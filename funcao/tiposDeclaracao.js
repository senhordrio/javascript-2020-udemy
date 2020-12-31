console.log(soma(3, 4))//Isso funciona pq no js o interpretador carrega todas as funções antes de ler a primeira linha(function declaration)
console.log(sub(3, 4))//Isso não funciona, nem na multi
//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

//named function expression(pouco usado, mas tem a vantagem na debugação por ser função nomeada)
const multi = function multi(x, y){
    return x * y
}