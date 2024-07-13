// Array em javascript

// array é uma estrutura de dados básica que contém vários valores
// declaração de array em javascript
let valor = [7,2,11]

document.write("normal")
document.write("<br>")
document.write(valor[0])
document.write("<br>")
document.write(valor[1])
document.write("<br>")
document.write(valor[2])
document.write("<br>")
document.write("<br>")



/*
O método sort() ordena os elementos do próprio array e retorna o array.
A ordenação não é necessariamente estável.
A ordenação padrão é de acordo com a pontuação de código unicode.
*/

valor.sort()
document.write("sort")
document.write("<br>")
document.write(valor[0])
document.write("<br>")
document.write(valor[1])
document.write("<br>")
document.write(valor[2])
document.write("<br>")
document.write("<br>")


/*
O método reverse() inverte os itens de um array.
O primeiro elemento do array se torna o último e o último torna-se o primeiro.
*/

valor.reverse()
document.write("reverse")
document.write("<br>")
document.write(valor[0])
document.write("<br>")
document.write(valor[1])
document.write("<br>")
document.write(valor[2])
document.write("<br>")
document.write("<br>")


document.write("<br>")

let fruta = ["limão", "abacaxi", "uva", "morango", "laranja"]

document.write(fruta)
document.write("<br>")



/*
A propriedade length representa um inteiro de 32-bit sem sinal,
que especifíca o número de elementos em um array.
*/

document.write("Número de frutas do array: " + fruta.length)
document.write("<br>")


/*
O método indexOf()
retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1
caso o mesmo não esteja presente.
*/

document.write("posição da fruta uva: " + fruta.indexOf("uva"))
document.write("<br>")



/*
O método push() adiciona um ou mais elementos ao final de um array
e retorna o novo comprimento desse array.
*/


fruta.push("manga")
document.write(fruta[5]) // veja que agora existe a posição 5
document.write("<br>")


/*
O método pop() remove o último elemento de um array e retorna aquele elemento.
*/

fruta.pop() // removeu a manga
document.write(fruta[5]) // veja que agora não existe a posição 5
document.write("<br>")

/*
O método shift()
remove o primeiro elemento de um array e retorna esse elemento.
Este método muda o tamanho do array.
*/

/*
O método unshift()
adiciona um ou mais elementos no início de um array
e retorna o número de elementos (propriedade length) atualizado.
*/


fruta.shift() // removeu o limão

fruta.unshift("maracujá") // adicionou maracujá no início no array


// mostrando todas as frutas
document.write("<br>")
document.write("<br>")
document.write(fruta[0])
document.write("<br>")
document.write(fruta[1])
document.write("<br>")
document.write(fruta[2])
document.write("<br>")
document.write(fruta[3])
document.write("<br>")
document.write(fruta[4])
document.write("<br>")