//podemos atribuir um valor padrão para um parâmetro(na função) e quando formos passar os valores(chamando a função) e não passarmos nada, o valor padrão irá aparecer no lugar (ao invés de 'identificado')

torrar("de forma", "Nutella", "Catatau")     //passando o valor de cada parâmetro
torrar("integral", "geleia")    //passando o valor de 2 parâmetros e deixando sem o valor da variável 'nome'(que tem um valor padrão/genérico)

function torrar(pao, recheio, nome = "Cliente"){    //atribuindo um valor 'padrão/genérico' para a variável 'nome'
    console.log("O pão " + pao + " com recheio de " + recheio + " está pronto")
    console.log("Pedido feito por: " + nome)
}
