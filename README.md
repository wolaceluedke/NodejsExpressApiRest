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

## Composição do nosso projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate


Biblioteca para automatizar o servidor para identificar alterações no código
Para utilizar essa biblioteca, execute o seguinte comando:

css
Copy code
npm install --save-dev ts-node-dev
Adicione a seguinte build para transpilar o código:

json
Copy code
"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts"
Pacote para monitorar os status
Para monitorar os status, utilize o pacote abaixo:

css
Copy code
npm install --save http-status-codes
Configuração do Node.js
É preciso fazer uma configuração no Node.js para que ele seja capaz de interpretar JSONs.

Biblioteca pg
Será utilizada a biblioteca pg para realizar a conexão com o banco de dados.

Para instalar a biblioteca, utilize o seguinte comando:

Copy code
npm install pg
Criação da tabela
Foi criada a tabela application_user utilizando o seguinte comando:

sql
Copy code
CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
)
Essa tabela irá criar um UUID para representar o usuário, trazendo mais segurança para a aplicação.

Para que o uuid_generate_v4 funcione dentro do Postgres, é necessário habilitar a extensão uuid-ossp. Utilize o comando abaixo para habilitar a extensão:

sql
Copy code
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
Além disso, é necessário utilizar o pgcrypto para criptografar a senha. Utilize o comando abaixo para habilitar a extensão:

sql
Copy code
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
Por fim, utilize o seguinte comando para inserir um usuário com nome de usuário admin e senha criptografada admin:

sql
Copy code
INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));
O my_salt é uma chave privada utilizada para a criptografia da senha.


Criando a estrutura básica para conexão com banco de dados.
-Consultar a lista de nosss usuários, para isso, criar um pasta chamada repositories: nessa parte deixa todo código responsável por acessar o banco de dados
