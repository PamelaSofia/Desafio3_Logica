main()  //chamamos apenas uma função que irá retornar todas as outra 3 funções do código

//criando uma função 'main' onde no escopo iremos chamar todas as funções abaixo
function main(){
    getDados()
    checkDados()
    sendDados()
}

//declarando 3 funções e suas ações
function getDados(){
    console.log("pegando dados do usuário")
}

function checkDados(){
    console.log("validando os dados do usuário")
}

function sendDados(){
    console.log("cadastrando os dados do usuário")
}
