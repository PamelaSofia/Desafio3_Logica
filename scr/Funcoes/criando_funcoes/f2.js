//chamando uma função dentro de outra função
torrar()
//colocar() -> ao invés de chamarmos as duas funções, uma de cada vez, colocamos uma função dentro da outra

function torrar(){
    console.log("O pão está sendo torrado")
    colocar()   //toda vez que a função 'torrar' for chamada, a função 'colocar' também será chamada, pois está dentro do escopo
}

function colocar(){
    console.log("Preparando para colocar o pão")
    console.log("Finalizado")
}
