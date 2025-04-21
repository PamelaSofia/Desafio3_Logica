//'faça enquanto'
//'faça' {o que vai acontecer} 'enquanto'(regra)

let cont = 0

do{
    console.log("olá")
    cont++  //escrevemos essa linha para o código ter um fim, senão irá escrever 'olá' eternamente, com isso irá apenas até o valor permitido
} while(cont < 3)   //regra para o programa chegar a um fim

//no 'while' ele verifica e depois executa, no 'do while' ele executa e depois verifica
//caso a regra tenha o mesmo valor da variável declara ele irá executar pelo menos uma vez, enquanto no 'while' ele não irá executar nada
