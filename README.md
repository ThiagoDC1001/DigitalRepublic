# Muito mais que um Hellow Word

Gostaria de me apresentar, meu nome é Thiago Della Coletta e estou aplicando para a vaga de Desenvolvedor Full Stack Jr.

Essa é uma aplicação de transferências bancárias entre pessoas cadastradas no nosso sistema, é possível criar novas contas que já vem com um saldo e transferir dinheiro sabendo o CPF da pessoa favorecida.

O banco de dados roda em MYSQL, o backend foi desenvolvido com Node e ORM Sequelize e o frontend é em ReactJs e Bootstrap.


![image](https://user-images.githubusercontent.com/75635260/205827396-be60f144-76e5-4f67-847f-8224d3bf0afd.png)



Esse é o diagrama relacional do banco de dados que é composto por 3 tabelas, sendo a principal nomeada Accounts onde ficam o ID e o Balance das contas e serve como chave estrangeira relacionando a tabela de Users com a de Transactions.

Esse relacionamento controla as transações e permite que não sejam feitas transferências sem o respectivo saldo para tal.

  

Para rodar esse projeto na sua máquina é necessário que você tenha o MySQL na versão mais atualizada, assim como o Node.

  

## Para rodar a aplicação

  

Uma vez feito o clone do repositório é preciso rodar o comando

    npm install

Tanto na pasta Backend como na pasta Frontend/digitalrepublic, isso vai instalar as dependências necessárias para o total funcionamento do sistema.

  

Posteriormente dentro da pasta Backend pode-se rodar o comando

    npm run db

onde será criado o banco de dados, suas models e migrations assim como será populado com seus seeders.

  

Esse projeto utiliza do mapeamento objeto-relacional (sigla ORM em inglês) do Sequelize separando as funções nas camadas Controller / Service / Model.

  

Depois que temos o banco de dados criado e populado devemos subir o backend da nossa aplicação com o comando  

    npm run start

Isso fará com que o Node faça a ligação com o banco de dados através do Sequelize e assim possamos começar a consumir as informações.

  

Na pasta Frontend/digitalrepublic podemos usar o comando  

    npm run start  

para iniciarmos o frontend onde iremos interagir com o nosso sistema de transação bancária.

Existem dois usuários cadastrados: Thiago e Erika
Para fazer o legin devem ser usado os seguintes dados:
CPF: 831.054.330-15 / Senha: pedrinha
CPF: 317.255.752-99 / Senha: bolinha
  

Nessa aplicação temos os endpoints:

  

***Usuários***

*GET(/user)* - que traz todos os usuários cadastrados com seu nome/cpf/senha

*GET(/user/:id)* - que permite selecionar o usuário pelo id

*POST(/user)* - para cadastro de usuário com um objeto no body da requisição com nome/cpf/senha

  

***Transações***  
*POST(/transaction)* - para cadastrar uma transação  
*GET(/transaction)* - traz todas as transações em um objeto com id/value/creditedAccountId/debitedAccountId

*GET(/transaction/:id)* - busca uma transação específica passando o id

  

***Login***  
*POST(/login)* - para fazer o login do usuário com um objeto no body com cpf/senha

*GET(/login/validate)* - que confere no headers o token de acesso do usuário

  

***Register***  
*POST(/login/register)* - cadastra um novo usuário

# Dificuldades e aprendizados

Foi uma experiência muito boa fazer esse projeto do zero, batendo cabeça para referenciar as tabelas e fazer todas as regras de negócio serem aplicadas.

  

Fugi muito do escopo pois li o README do desafio e comecei a imaginar milhares de coisas a mais pensando que fazia sentido para mim, isso é um ponto que quero melhorar como profissional.

  

Talvez não houvesse a necessidade de uma página de login, uma forma de cadastrar novas contas, encriptação de senhas ou geração de tokens com JWT, porém busquei atingir o máximo de qualidade nesse projeto.

Já ficam os aprendizados e as madrugadas virado.

  

Peço desculpas pela demora no envio e a estilização ser feita em bootstrap e não em tailwind.

Mas esse é um projeto vivo e pretendo refatora-lo e melhorá-lo cada vez mais.

  

Grato pela oportunidade de participar e fico a disposição para sanar quaisquer dúvidas.

  

Abraços
