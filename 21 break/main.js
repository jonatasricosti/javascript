// o comando break encerra imediatamente a execução do loop


// exemplo com o loop for

for(let i = 1; i <= 10; i++)
{
    if(i == 6)
    {
        break; // sai do loop quando i == 6
    }

    document.write(i + "<br>");
}

document.write("<br>" + "<br>" + "<br>");

// exemplo com o loop while

let x = 0
while(true)
{
    x++;
    if(x >= 4)
    {
        break;  // sai do loop quando i == 4
    }

    document.write("x = " + x + "<br>");
}

/*
como vimos anteriormente o break também é usado,
no switch case, e pode ser usado em outros loops
*/