//exemplo: pegar os dados de um usuário e mandar cadastrar em uma função que manda para o banco de dados
//SEM json:
let name = "Pâmela"
let age = 20
let products = ["Livro", "UNO", "Relógio", "Lego", "Pelúcia"]
let productsValues = [57.5, 30.7, 247.3, 579.9, 23]
 
generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){         //generate invoice = gerar fatura
    console.log("Compradora " + name + " de " + age + " anos")
    console.log("--------------------------------")
    console.log("Produto comprado: " + products[0])
    console.log("--------------------------------")
    console.log("Custando R$" + productsValues[0])
}
