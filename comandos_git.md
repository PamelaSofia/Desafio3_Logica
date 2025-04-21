colocando o projeto no github pela primeira vez:
-> criar o repositório no github
-> git init
-> git add .    (caso quiser colocar apenas 1 arquivo: git add "nome_arquivo.extensao")
-> git commit -m "projeto criado"
-> git branch -M main
-> git remote add origin colocar o HTTPS criado que o github irá disponibilizar
-> git push -u origin main

sempre deixar o código no github atualizado
quando fizer alteração no código e precisar mandar para o github:
-> git add.
-> git commit -m "qualquer mensagem"
-> git push origin main

caso delete o projeto ou queira acessar de outra máquina, vamos clonar o código que está no github para o vscode novamente:
-> selecionar o repositório desejado no github
-> selecionar 'code'
-> copiar o HTTPS
-> abrir o vscode, open folder
-> entrar no disco local C:
-> criar uma nova pasta e selecionar 
-> abrir o terminal e digitar "git clone x" (colar o https no lugar do 'x' e sem nenhuma aspas)
-> cd 'nome da pasta' (sem colocar as aspas)

outra maneira é editar direto no github:
-> entrar no repositório desejado
-> clicar na 'tecla ponto' do computador
-> sozinho irá abrir o editor para mexer
