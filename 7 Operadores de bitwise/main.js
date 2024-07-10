/*

Operadores de bitwise

AND	      &
OR	      |
XOR	      ^
NOT	      ~
right shift  >>
left shift   <<
unsigned right shift >>>


*/


let valor = 0;


// AND	      &
// 1 & 1 =  1
// 1 & 0 =  0
// 0 & 1 =  0
// 0 & 0 =  0

//  65 & 67
//  01000001 = 65
//  01000011 = 67
//  ________
//  01000001 = 65

valor = 65 & 67;
document.write(valor)
document.write("<br>")

// OR	      |
// 1 | 1 =  1
// 1 | 0 =  1
// 0 | 1 =  1
// 0 | 0 =  0

//  65 | 67
//  01000001 = 65
//  01000011 = 67
//  ________
//  01000011 = 67

valor = 65 | 67;
document.write(valor)
document.write("<br>")


// XOR	      ^
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

//  65 ^ 53
//  01000001 = 65
//  00110101 = 53
//  ________
//  01110100 = 116

valor = 65 ^ 53;
document.write(valor)
document.write("<br>")


// NOT	      ~
// ~0 = 1
// ~1 = 0

//   -76 = 10110100
// ~ -76 = 01001011
//    75 = 01001011
valor = ~ -76;

document.write(valor)
document.write("<br>")


// x << n = x*2^n // right shift  >>
// x >> n = x/2^n // left shift   <<


// 5   decimal = 0001 0000 0000 binário
// 256 decimal = 000100000000 binário

// 000000000101 << 3
// 000000101000 << 3
var a = 5 << 3;

// 0001 0000 0000 >> 5
// 0000 0000 1000 >> 5
var b = 256 >> 5;

/*
o operador >>> faz a mesma coisa que o right shift,
mas trata o valor como sendo sem sinal
por isso ele é chamado de unsigned right shift
*/

var c = 256 >>> 2

document.write("pra esquerda: " + a)
document.write("<br>")
document.write("pra direita: "  + b)
document.write("<br>")

document.write("pra direita sem sinal: "  + c)
document.write("<br>")