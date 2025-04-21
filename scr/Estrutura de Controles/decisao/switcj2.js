//mais de um 'case' fazendo a mesma função

let fruta = "pera"

switch(fruta){
    case "laranja":
    console.log("suco de laranja")
    break

    case "banana":      //primeiro case 
    case "morango":     //segundo case  
    console.log("vitamina de " + fruta)     //mesma função para os dois
    break

    default:
    console.log("suco do dia")
}
