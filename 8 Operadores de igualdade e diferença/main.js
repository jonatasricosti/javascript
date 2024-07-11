/*
O operador == compara por "resultado", ou seja, como JavaScript não é fortemente tipado ele converte o que você tá querendo comparar e verifica

O operador === ele compara o valor e o tipo, então só vai ser true se for exatamente igual (valor e tipo).


O operador != compara por "resultado", ou seja, como JavaScript não é fortemente tipado ele converte o que você tá querendo comparar e verifica

O operador !== ele compara o valor e o tipo, então só vai ser true se for exatamente diferente (valor e tipo).


*/



// igual
document.write(true == 'true')  // aqui vai dar false
document.write("<br>")

document.write(true == '1')  // aqui vai dar true
document.write("<br>")

document.write(true == true) // aqui vai dar true
document.write("<br>")

document.write(true === 'true') // aqui vai dar false
document.write("<br>")

document.write(true === '1') // aqui vai dar false
document.write("<br>")

document.write(true === true) // aqui vai dar true
document.write("<br>")
document.write("<br>")


// diferente
document.write(true != 'true')  // aqui vai dar true
document.write("<br>")

document.write(true != '1')  // aqui vai dar false
document.write("<br>")

document.write(true != true) // aqui vai dar false
document.write("<br>")

document.write(true !== 'true') // aqui vai dar true
document.write("<br>")

document.write(true !== '1') // aqui vai dar true
document.write("<br>")

document.write(true !== true) // aqui vai dar false
document.write("<br>")
document.write("<br>")
