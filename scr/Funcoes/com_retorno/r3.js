let userName = getFirstName("Pâmela Sofia Margutti da Silva")
console.log("Seja bem-vinda " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

//'split'-> cada espaço que tiver na frase, vai quebrar e guardar cada texto separado dentro de 1 vetor
//exemplo: oi pamela tchau -> [oi, pamela, tchau]
//quando colocamos o '[0]' estamos dizendo que depois dele separar o texto em 1 vetor ele irá retornar o que estiver na posição '0'
