// o loop for serve pra percorrer um bloco de código várias vezes

// exemplo

for(let x = 1; x <= 10; x++)
{
    // repete esse bloco de código x vezes
    document.write(x); // mostre o valor de x
    document.write("<br>"); // pula linha

    // depois disso acaba o loop
}

document.write("<br>");
document.write("<br>");

/*
o loop for também serve pra monstrar
todos os valores do array
exemplo
*/

let names = ["Jonatas", "Carla", "Dudu", "Camila"];

for(let i = 0; i < names.length; i++)
{
    document.write(names[i]); // mostra o valor da posição do array
    document.write("<br>");   // pula linha
}
