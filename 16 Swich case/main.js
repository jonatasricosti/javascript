// o comando switch case serve pra fazer máquina de estado finita


let estado = 0



// ao mudar a variável muda seu estado
estado = 3
switch(estado)
{
    case 1: estado = "Intro"; break;
    case 2: estado = "Menu"; break;
    case 3: estado = "Game"; break;
    case 4: estado = "Gameover"; break;
    case 5: estado = "Não temos esse valor"; break;
    default: ;break;
}


document.write(estado);
document.write("<br>");