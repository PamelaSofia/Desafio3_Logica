//'else' é o 'senão', então caso 'if' nã seja verdadeiro será executado a ação que estiver dentro do 'else'
let ovo = false
let comprar

if(ovo){
    comprar = "Leite"   //caso 'ovo' seja 'true'
}

else{
    comprar = "Miojo"     //caso 'ovo' seja 'false
}

console.log("Item comprado: " + comprar)    //irá retornar 'Leite' ou 'Miojo', dependendo se 'ovo' for 'true' ou 'false'
