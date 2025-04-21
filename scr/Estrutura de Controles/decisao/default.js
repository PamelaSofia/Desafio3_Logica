//default é uma 'resposta padrão', um 'case padrão'

let fruta = "banana"

switch(fruta){
    case "laranja":
    console.log("suco de laranja")
    break

    case "banana":
    console.log("vitamina de banana")
    break

    case "maçã":
    console.log("suco de maçã")
    break

    default:    //caso nenhum dos 'cases'tenha a fruta descrita na variável, o programa utiliza esta função 'case genérico/padrão'
    console.log("suco do dia")
}

//mais de um 'case' fazendo a mesma função