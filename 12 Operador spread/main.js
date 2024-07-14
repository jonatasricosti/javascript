// declaração de arrays
const primeiro = [1,2,3]
const segundo  = [4,5,6]


// sintaxe de espalhamento ou operador spread ...

// serve para juntar arrays
const combinado = [...primeiro, segundo]

// fazer cópias
const clonado = [...combinado]

// juntar arrays e colocar novos valores
const novo = [...primeiro, "Novo valor", ...segundo]

document.write(combinado)
document.write("<br>")

document.write(clonado)
document.write("<br>")

document.write(novo)
document.write("<br>")


// nota o spread também funciona em objetos, funções e na manipulação do dom