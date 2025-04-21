//FORMA
class formaBolo{    //criando uma "forma" de estrutura de dados dados
    constructor(saborMassa, saborRecheio){  //função padrão que receberá 2 parâmetros
        this.saborMassa = saborMassa    //guardando a variável dentro da classe [this-> está chamando a classe]
        this.saborRecheio = saborRecheio
    }
}   

//OBJETO 
let boloFesta = new formaBolo("Massa de chocolate", "Recheio de morango")    //instanciando um novo bolo e passando o valor dos parâmetros
console.log(boloFesta)   //imprime toda a classe substituindo pelos valores passados
console.log(boloFesta.saborMassa)   //imprime apenas o valor passado para a variável 'saborMassa'
console.log(boloFesta.saborRecheio)   //imprime apenas o valor passado para a variável 'saborRecheio'
