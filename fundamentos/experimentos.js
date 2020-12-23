let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.c = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 //variavel perigosa do escopo global do node, não fazer isso
console.log(global.abc)
