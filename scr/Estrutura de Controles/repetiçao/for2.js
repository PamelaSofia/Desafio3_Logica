let pontoVida = 0   //variável principal

console.log("Pontos de vida inicial: " +  pontoVida)    //mensagem inical junto com a variável principal

for(let suco = 1; suco < 11; suco++){   //definindo uma nova variável que irá se 'acrescentar' na variável principal, definindo suas exigências
    pontoVida += 1      //forma resumida de escrever (pontoVida = pontoVida + 1), onde irá acrescentar valor de 1 em 1 na variável principal
    console.log("Tomou poção mágica: " + suco)  //mensagem que será exibida a cada vez que um valor for adicionado à variável principal
}

console.log("Pontos de vida totais: " + pontoVida)  //mensagem final junto com o valor total que foi somado à variável principal
