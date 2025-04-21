//operador 'OR(||)' só retorna 'true' se pelo menos 1 das 2 condições oferecidas forem verdadeiras
let tempo1 = "sol"
let item1 = "guarda-chuva"
let tempo2 = "chuva"
let item2 = "garrafa"
let podeSair1 = (tempo1 !== "chuva" || item1 === "guarda-chuva")
let podeSair2 = (tempo2 !== "chuva" || item2 === "guarda-chuva")
let podeSair3 = (tempo1 !== "chuva" || item2 === "guarda-chuva")
let podeSair4 = (tempo2 !== "chuva" || item1 === "guarda-chuva")

console.log("Nosso personagem pode sair de casa? " + podeSair1)
console.log("Nosso personagem pode sair de casa? " + podeSair2)
console.log("Nosso personagem pode sair de casa? " + podeSair3)
console.log("Nosso personagem pode sair de casa? " + podeSair4)
