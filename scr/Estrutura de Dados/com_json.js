//exemplo: pegar os dados de um usuário e mandar cadastrar em uma função que manda para o banco de dados
//COM json:
let invoice = {         //declarando as variáveis dentro de uma só estrutura
    name: "Pâmela", 
    age: 20,
    products: {
        0: ["Livro", 57.5],
        1: ["Jogo", 30.7],
        2: ["Lego", 487.9],
        3: ["Pelúcia", 15]
    }
}

generateInvoice(invoice)    //chamando a função e passando o valor

//função para nota e passando apenas 1 variável
function generateInvoice(invoice) {
    console.log(`Compradora ${invoice.name} de ${invoice.age} anos`)    //usando 'carse' ao invés de 'aspas duplas' para melhorar a escrita
    console.log("--------------------------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}
