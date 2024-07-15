// Múltiplos if vs if, else if, else


let x = 5;

// quando temos múltiplos if todos eles são executados
if(x > 1)
{
	document.write("eu")
	document.write("<br>")
}

if(x > 2)
{
	document.write("ele")
	document.write("<br>")
}

if(x > 3)
{
	document.write("ela")
	document.write("<br>")
}

document.write("<br>")
document.write("<br>")



/*
Quando não temos múltiplos if,
ou seja, temos else if ou else somente um código é executado
*/

if(x > 1) document.write("meu")
else if(x > 2) document.write("dele") // precisa do if anterior
else  document.write("dela")          // se não foi if ou else if execute isso

document.write("<br>")
