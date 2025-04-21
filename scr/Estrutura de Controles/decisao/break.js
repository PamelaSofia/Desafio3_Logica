//quando usando o 'swicth case' e dentro do escopo um 'case' está correto/é verdadeiro, o programa executa tudo o que estiver abaixo, a paritr do 'case' certo até o final do escopo
//para consertar este erro é usado o 'break', onde é usado para parar de executar um 'case' assim que verificado

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
}
