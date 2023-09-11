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
# RODA O SERVIDOR
```
cd server
```
```
npm i
```
```
npm run server
```
# RODA A APLICAÇÃO
```
cd ..
```
```
cd site
```
```
npm i
```
```
npm start
```
