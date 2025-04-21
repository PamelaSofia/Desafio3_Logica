//toda variáevl criada dentro de uma função ou passada como parâmetro, não pode ser usada fora do escopo da função
//caso uma variável tenha sido criada fora de uma função, não conseguimos usar ela dentro de nenhuma função

torrar("pão de forma")      //quando chamamos a função, passamos o valor da nossa variável
torrar("pão integral")      //passamos outro resultado para nossa variável

function torrar(pao){   //dentro do '()' do nome da função iremos passar uma variável(um parâmetro)
    console.log("Pão torrado com " + pao)
}
