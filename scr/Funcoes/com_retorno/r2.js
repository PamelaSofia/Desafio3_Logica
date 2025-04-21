//caso quisermos que a soma seja feita, mas por hora não queremos exibir o resultado

let resultado = soma(5, 5)  //declarando uma variável e atribuindo o resultado de uma função, possibilitando ser usado em outro momento

console.log("O resultado da soma entre os números é: " + resultado)

function soma(numA, numB){
    let adicao = (numA + numB)
    return adicao   //colocando isso não estamos faazendo nada com isso, estamos retornando vazio
}

//caso não quisermos retornar o valor da função em uma variável, poderiamos chamar direto
console.log("O resultado da soma entre os números é: " + soma(5, 5))

//poderiamos tirar a variável que está dentro da função e colocar direto no 'return'
function soma(numA, numB){
    return numA + numB
}
