let ovo = false
let item 

if(ovo){
    item = "leite"    //caso o valor de 'ovo' for 'true', quero que em 'item' seja adicionado 'leite'
}

//com o 'console.log' fora do escopo do 'if', a frase sempre será retornada, o que muda será o valor da variável 'item'
console.log("Item comprado: " + item)   //caso 'ovo' for 'true' irá retornar 'Item comprado: leite', caso seja 'false' não irá retornar nada
