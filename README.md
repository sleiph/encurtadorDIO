# Encurtador DIO

Encurtador de urls usando NodeJs, Typescript e MongoDB, pro projeto de MongoDB do [Bootcamp de Fullstack da Eduzz](Encurtador de url com node, typescript e mongoDB).

### Rodando o projeto

```shell
npm install
```

```shell
npm run build
```

```shell
npm run dev
```
A aplicação fica ouvindo na [porta :5000](http://localhost:5000)

```shell
npm run build:watch
```
Pro refresh automático

### Autenticando o banco de dados

No arquivo [Cosntants.ts](./src/config/Constants.ts) tem um atributo chamado `MONGO_CONNECTION`, o valor dele deve ser substituído pelo link do seu Cluster na [Plataforma Atlas](https://cloud.mongodb.com/), e é bom colocar a senha no arquivo [.env](./.env), na raiz do projeto, seguindo o [exemplo](./.env-exemplo) que eu deixei salvo.

### Créditos

Projeto original por [Alexia Pereira](https://github.com/alexiadorneles/url-shortener-dio).
