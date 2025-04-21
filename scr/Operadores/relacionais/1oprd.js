let num = "1"
console.log(num == 1) //compara o valor
console.log(num === 1) //compara o valor e o formato do connteúdo (esse formato só existe no javascript)
console.log(num != "nike") //compara se é diferente

let cpfBloqueado = "111.222.333-44"
let cpfUsuario = "444.333.222-11"
let cpfConsulta = cpfBloqueado === cpfUsuario
let cpfConsulta2 = cpfBloqueado != cpfUsuario

console.log("O CPF do usuário está bloqueado? " + cpfConsulta)
console.log("O usuário pode embarcar? " + cpfConsulta2)
