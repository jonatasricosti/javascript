// o comando continue ignora algo dentro de laços de repetição (loops) 

for(let i = 1; i <= 10; i++)
{
    if(i == 2)
    {
        continue; // ignora o número 2
    }

    document.write(i + "<br>"); // mostra todos os números menos o 2
}