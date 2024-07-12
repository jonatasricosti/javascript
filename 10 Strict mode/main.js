/*
O "strict mode" é uma funcionalidade presente no JavaScript que permite
ativar um modo de operação mais restrito e seguro dentro de um script.
Quando o "strict mode" é ativado, certas práticas consideradas
potencialmente problemáticas são proibidas e lançam erros durante a execução do código.

Algumas das restrições impostas pelo "strict mode" incluem exigir a declaração
de variáveis antes de utilizá-las, proibir o uso de
palavras reservadas para possíveis futuras versões do JavaScript, impedir a modificação
de objetos pré-definidos, entre outros.


Para ativar o "strict mode" em um script, basta adicionar a declaração "use strict"; no início do código.

*/


"use strict"; // modo strict mode ativado

// com o modo strict mode ativado não podemos declarar uma variável dessa forma
//nome = "Jonatas"

let nome = "Jonatas"

document.write(nome)
document.write("<br>")




