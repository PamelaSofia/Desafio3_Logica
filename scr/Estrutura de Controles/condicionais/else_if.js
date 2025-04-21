//com o 'else if' pode se fazer uma segunda pergunta
let fome = 1    //nível de fome definido
let comida

if(fome == 1){      //caso o nível de fome for '1', irá ser retornado 'amendoim'
    comida = "amendoim"
}
else if(fome == 2){     //caso o nível de fome for '2', irá ser retornado 'rap 10'
    comida = "rap 10"
}
else{   //caso o nível da fome forqualquer outro número, irá ser retornado "arroz, feijão, carne"
    comida = "Arroz, feijão, carne"
}

console.log("O nível de fome é: " + fome)   //retorna o nível da fome
console.log("A comida escolhida foi: " + comida)    //retorna a comida de acordo com o nível da fome
