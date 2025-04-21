//criando uma matriz, onde temos uma coleção com 'colunas', onde podemos aplicar os vetores tanto nas linhas quanto dos itens de cada linha
let iAgente = [
    ["Pâmela", 20, "Ativa"],
    ["Catatau", 25, "Ativo"],
    ["James", 45, "Inativo"]
  ]
  
  //no 1° colchete passamos o vetor para qual linha queremos reotrnar, no 2° colchete passamos o vetor de um item específico da linha (que seriam como colunas)
  console.log(iAgente[0][2])
  
  //fazendo uma frase mais trabalhada e detalhada
  console.log("A agente " + iAgente[0][0] + " tem " + iAgente[0][1] + " anos e está " + iAgente[0][2])
  