//ao invés de limitarmos ao 'espaço entre as palavras', podemos expandir da seguinte forma

let userName = getFirstName("Pâmela Sofia Margutti da Silva", " ")  //nesse exemplo iremos separar pelos 'espaços'
console.log("Seja bem-vinda " + userName)

userName = getFirstName("Sofia-Margutti-da-Silva", "-")     //nesse exemplo iremos separar pelos 'hífens -'
console.log("Seja bem-vinda " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}
