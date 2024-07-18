/*

o loop while cria um laço que executa uma rotina especifica
enquanto a condição de teste for verdadeira

*/


// exemplos


let executando = true;
let x = 0;

while(executando) // fica em loop pois é verdadeiro
{
    document.write(x); // mostra o valor de x
    document.write("<br>"); // pula linha

    x = x + 1; // soma o valor de x em 1

    if(x > 5)
    {
        executando = false; // sai do loop while porque é falso
    }
}

document.write("<br>");
document.write("<br>");


var i = 0;

while(i < 10) // enquanto i for menor que 10 fica em loop
{
    i = i + 1 // soma o valor de i em 1

    document.write(i); // mostra o valor de i
    document.write("<br>"); // pula linha

    /*
    sai do loop quando i for 11
    pois 11 < 10 falso
    */
}

document.write("<br>");
document.write("<br>");

while(false) // não fica em loop pois é falso
{
    document.write("teste"); // não mostra isso pois saiu do loop
}

