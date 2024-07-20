/*
O método window.confirm() mostra uma caixa de diálogo na janela
e retorna true se o usuário clicou em "OK", caso contrário, falso.
*/


let resposta = window.confirm("clique em ok ou cancelar")

if(resposta == true)
{
	document.write("você clicou em ok" + "<br>")
}

else
{
	document.write("você clicou em cancelar" + "<br>")
}

