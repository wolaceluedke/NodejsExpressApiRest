# NodejsExpressApiRest

Projeto Construido no estilo arquitetal REST 
Criando API REST na prática com node.js + Express
Banco de dados postGress 

foi criado um  microserviço de autenticação,na qual ele gerencia todo cadastro do usuário e a autenticação dentro da plataforma.
Ele acaba virando uma peça chave em várias aplicações do ecosistema, pois todas as requisições autenticadas que precisem de uma
segurança a mais, vai passar por ele.
-criar microserviço
-fazer manutenção do usuário dentro dele 
-endpoints de apoio de obtenção e validação de token.

                 API REST
.GET /users     //VISUALIZAÇÃO DE TODOS USUÁRIOS
<br>
.GET /users/:uuid       //VISUALIZAÇÃO DE UM USUÁRIO ESPERCÍFICO
<br>
.POST /users         //CRIAÇÃO DE UM USUÁRIO
<br>
.PUT /users/:uuid     //ALTERAÇÃO DE UM USUÁRIO ESPECÍFICO
<br>
.DELETE /users/:uuid     //DELETAR UM USUÁRIO ESPECÍFICO
<br>
                AUTENTICAÇÃO
.POST /token  //PARA QUE FAÇA LOGIN DESSE ENDPOINT
.POST /token/validate   //OPERAÇÃO PARA VALIDAR NOSSO TOKEN

Biblioteca para automatizar o servidor para identificar alterações no código.
npm install --save-dev ts-node-dev
adicionei essa build para transpilar o código 
"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts"

Pacote para monitorar os status
npm install --save http-status-codes

também é preciso fazer uma configuração no node.js para que ele seja capaz de interpretar jsons
