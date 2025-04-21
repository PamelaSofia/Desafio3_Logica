//operador 'AND(&&)' só retorna 'true' se as 2 condições oferecidas forem verdadeiras
let idade1 = 17
let visto1 = true
let idade2 = 18
let visto2 = false

let res1 = console.log((idade1 >= 18) && (visto1 === true)) //idade está menor, visto está correto
let res4 = console.log((idade2 >= 18) && (visto2 === true)) //idade está correta, visto está errado
let res2 = console.log((idade1 >= 18) && (visto2 === true)) //idade está menor, visto está correto
let res3 = console.log((idade2 >= 18) && (visto1 === true)) //única opção em que as 2 condições estão verdadeiras
