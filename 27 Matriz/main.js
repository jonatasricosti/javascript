/*
Uma matriz é um array bidimensional, ou seja,
uma estrutura de dados que contém linhas e colunas
*/


let matrix =
[
  [10, 20, 30], 
  [40, 50, 60], 
  [70, 80, 90] 
];


// exibindo todos os valores da matriz manual
document.write(matrix[0][0] + " ")    // linha = 0  coluna = 0
document.write(matrix[0][1] + " ")    // linha = 0  coluna = 1
document.write(matrix[0][2] + " ")    // linha = 0  coluna = 2
document.write("<br>")                // pula linha

document.write(matrix[1][0] + " ")    // linha = 1  coluna = 0
document.write(matrix[1][1] + " ")    // linha = 1  coluna = 1
document.write(matrix[1][2] + " ")    // linha = 1  coluna = 2
document.write("<br>")                // pula linha

document.write(matrix[2][0] + " ")    // linha = 2  coluna = 0
document.write(matrix[2][1] + " ")    // linha = 2  coluna = 1
document.write(matrix[2][2] + " ")    // linha = 2  coluna = 2
document.write("<br>")                // pula linha



document.write("<br>" + "<br>"+ "<br>")


// assim como array matrizes funciona muito bem o loop for
// exibindo todos os valores da matriz com o loop for
for(let linha = 0; linha < 3; linha++)
{
	document.write("<br>") // pula linha toda vez que muda de linha
	for(let coluna = 0; coluna < 3; coluna++)
	{
		document.write(matrix[linha][coluna] + " ");
	}
}


document.write("<br>" + "<br>"+ "<br>")



// podemos também criar uma tabela e mostrar os valores da matriz
// nota é importante saber criar uma tabela em html antes de ler esse código

document.write('<table border = "1" cellspacing = "0" cellpadding = "5">') // início da tabela

for(let linha = 0; linha < matrix.length; linha++)
{
	document.write('<tr>') // inicia uma nova linha

	for(let coluna = 0; coluna < matrix.length; coluna++)
	{
		document.write('<td>' + matrix[linha][coluna] + '</td>');
	}

	document.write('</tr>'); // fim da linha
}

 document.write('</table>'); // fim da tabela

