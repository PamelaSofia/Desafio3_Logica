//FORMA
class formaBolo{    
    constructor(saborMassa, saborRecheio){  
        this.saborMassa = saborMassa    
        this.saborRecheio = saborRecheio
    }
    escrever(){     //quando declarada uma função dentro de uma classe, não precisa usar a palavra 'function'
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }  
}   

//OBJETO 
let boloFesta = new formaBolo("chocolate", "morango")    
let boloParty = new formaBolo("ninho", "morango com nutella")

boloFesta.escrever()
boloParty.escrever()
