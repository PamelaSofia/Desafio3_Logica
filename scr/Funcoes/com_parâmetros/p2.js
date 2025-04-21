//caso não passemos o valor para o parâmetro quando chamamos a função, irá aparecer como 'indentificado' na frase

torrar("Pão de forma", "Nutella")     //passando o valor de cada parâmetro
torrar("Pão de forma")     //passando o valor de apenas 1 parâmetro

function torrar(pao, recheio){    //passando mais de 1 parâmetro
    console.log("Pão escolhido: " + pao)
    console.log("Recheio escolhido: " + recheio)
}
