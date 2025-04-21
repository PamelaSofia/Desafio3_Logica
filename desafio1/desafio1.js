let nome = 'abc'
let nivel = 5

if(nivel <= 1000){
    console.log("O " + nome + " está no nível FERRO")
}
else if(nivel >= 1001 && nivel <= 2000){
    console.log("O " + nome + " está no nível BRONZE")
}
else if(nivel >= 2001 && nivel <= 5000){
    console.log("O " + nome + " está no nível PRATA")
}
else if(nivel >= 5001 && nivel <= 7000){
    console.log("O " + nome + " está no nível OURO")
}
else if(nivel >= 7001 && nivel <= 8000){
    console.log("O " + nome + " está no nível PLATINA")
}
else if(nivel >= 8001 && nivel <= 9000){
    console.log("O " + nome + " está no nível ASCENDENTE")
}
else if(nivel >= 9001 && nivel <= 10000){
    console.log("O " + nome + "está no nível IMORTAL")
}
else{
    console.log("O " + nome + " está no nível RADIANTE")
}
