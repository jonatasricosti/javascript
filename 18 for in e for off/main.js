/*

o loop for in serve pra percorrer um array
com ele você pode mostrar a posição do array ou os elementos do array

*/

// exemplos

let names = ["Jonatas", "Carla", "Dudu", "Camila"];

for(i in names)
{
    // mostra a posição dos elementos
    document.write(i);
    document.write("<br>"); // pula linha
}

document.write("<br>");   // pula linha
document.write("<br>");   // pula linha

for(i in names)
{
    // mostra os elementos do array names
    document.write(names[i]);
    document.write("<br>");   // pula linha
}

document.write("<br>");   // pula linha
document.write("<br>");   // pula linha

/*
o for off faz a mesma coisa que o for in,
porém você não precisa escrever a sintaxe de array []
*/


let cores = ["Azul", "Cinza", "Vermelho", "Preto", "Branco"]

for(i of cores)
{
    // mostra os elementos do array cores
    document.write(i);
    document.write("<br>");
}
