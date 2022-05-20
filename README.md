# On16-TodasEmTech-S8-API-Get-Post

## Turma Online Todas em Tech - Back-end | Semana 8: Primeiro Servidor API - GET - POST

### Assuntos falado em sala: 

## 📝 Protocolo HTTP e Verbos;
## 📝 CRUD;
## 📝 API;
## 📝 GET && POST; 
## 📝 Postman;
## 📝 Criando o Server;

 <img src="https://user-images.githubusercontent.com/100974682/169422619-b1a75081-5812-4455-b3ff-902cca30bb9d.jpg" alt="Gif Yeah" width="450">

## HTTP

Protocolo de Transferência de Hipertexto é um protocolo usado dentro do modelo Client/Server é baseado em pedidos (requests) e respostas (responses).
Ele é a forma em que o Cliente e o Servidor se comunicam. 

## HTTP - Verbos

Os verbos HTTP são um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada.
O Client manda um request solicitando um dos verbos e o Server deve estar preparado para receber e responde-lo com um response.

## HTTP - CRUD
CRUD é a composição da primeira letra de quatro operações básicas de um banco de dados, e são o que a maioria das aplicações fazem.

 - C: Create (criar) - criar um novo registro

- R: Read (ler) - exibir as informações de um registro

- U: Update (atualizar) - atualizar os dados do registro

- D: Delete (apagar) - apagar um registro

## API
API busca criar formas e ferramentas de se usar uma funcionalidade ou uma informação sem realmente ter que ''reinventar a tal função''.

Ela não necessariamente está num link na Web, ela pode ser uma lib ou um framework, uma função já pronta em uma linguagem específica por exemplo.

## MÉTODO GET

Usamos GET para ler ou recuperar um recurso. Um GET bem-sucedido retorna uma resposta contendo as informações solicitadas.

Em nossa biblioteca, poderíamos usar um GET para recuperar livros escritos por um autor específico.

**_GET /autor/:idautor/livros_**

## MÉTODO POST
Usamos POST para criar um novo recurso. Uma solicitação POST requer um corpo no qual você define os dados da entidade a ser criada.

Uma solicitação POST bem-sucedida seria um código de resposta 200. Em nossa biblioteca, poderíamos usar um método POST para adicionar um livro.

### **_POST /livros_**
```
{ "id": idDoNossoLivro,

   "title": "tituloLivro",

    "autor": "autorLivro"

   "description": "descricaoLivro"

}

```

## Postman

O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.

## Criando o meu Server

 <img src="https://user-images.githubusercontent.com/100974682/169424271-dfb902c0-90e2-409c-9331-5543258b7cae.jpg" alt="Gif Yeah" width="240">

## Conclusão:

Se você está se perguntando o que é API, em uma definição formal, o conceito de API está relacionado a um conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por outros aplicativos.

O conceito de API nada mais é do que uma forma de comunicação entre sistemas. Elas permitem a integração entre dois sistemas, em que um deles fornece informações e serviços que podem ser utilizados pelo outro, sem a necessidade de o sistema que consome a API conhecer detalhes de implementação do software.

_Metaforicamente, podemos pensar no que é API como um garçom. Quando estamos em um restaurante, buscamos o que desejamos no menu e solicitamos ao garçom. O garçom encaminha esse pedido à cozinha, que prepara o pedido. No fim, o garçom traz o prato pronto até a gente. Não temos detalhes de como esse prato foi preparado, apenas recebemos o que solicitamos._


 <img src="https://img.shields.io/badge/Status-Atividade%20Realizada%20S8--API--Get--Post-orange" alt="Gif Yeah" width="350">


![bebe](https://user-images.githubusercontent.com/100974682/167978711-3c0b4a06-6cd6-4c1f-99f5-19b62dd58fca.jpg)

** Segue minhas redes sociais.**
- [linkedin](https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-211b5691/)
- [github](https://github.com/idbabis) 
- e-mail: idbabis@gmail.com





