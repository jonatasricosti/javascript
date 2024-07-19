/*

o loop do while faz a mesma coisa que o while
a diferença está na sintaxe

*/


// exemplos

let x = 1;

do
{
    document.write(x + "<br>");

    x++;

}while(x <= 10);


document.write("<br>" + "<br>" + "<br>")




let executando = true;
let times = 1;
do
{
    switch(times)
    {
        case 1: document.write("Eu gosto de javascript" + "<br>"); break;
        case 2: document.write("É muito legal" + "<br>"); break;
        case 3: document.write("Estudar é muito bom" + "<br>"); break;
        default: ;break;
    }


    if(times >= 3)
    {
        executando = false;
    }

    times++;

}while(executando);


