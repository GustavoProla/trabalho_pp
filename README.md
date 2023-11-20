# INFORMAÇÕES DO BANCO DE DADOS

```
create database teste_crud;
```

```
use teste_crud;
```
```
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(120) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `turma` varchar(120) NOT NULL,
  `info` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
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
