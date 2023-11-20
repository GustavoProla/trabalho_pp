# INFORMAÇÕES DO BANCO DE DADOS

```
create database crud2;
```

```
use crud2;
```
```
CREATE TABLE usuarios(
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  fone VARCHAR(45) NOT NULL,
  data_nascimento DATE NOT NULL,
  PRIMARY KEY (`id`)
);
```
# COMO RODAR A APLICAÇÃO

Primeiro abra 2 gitBash na pasta do projeto
Em um deles, entre na pasta server:
```
cd server
```
Baixar as dependendcias do backend:
```
npm i
```
Para rodar o servidor, basta colocar:
```
npm run server
```
No outro bloco de comando:
```
cd site
```
Baixar as dependendcias do frontend:
```
npm i
```
E por fim rodar o react:
```
npm start
```
