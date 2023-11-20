const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const mysql = require("mysql2")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "teste_crud"
})

app.use(express.json())
app.use(cors())

app.use(bodyParser.json());

app.get("/enviarall", (req, res) => {

  const email = req.query.email;

  const q = `SELECT * FROM usuarios WHERE email = ?`;

  db.query(q, [email], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
});

app.get("/enviarid",(req, res) => {

  const id = req.query.id;

  const q = `SELECT * FROM usuarios WHERE id = ?`;

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
})




app.get("/enviar", (req, res) => {
  const { turma, email } = req.query;

  let q = "SELECT * FROM usuarios";

  // Verifica se 'turma' foi fornecido como parâmetro e adiciona à consulta
  if (turma) {
    q += ` WHERE turma = '${turma}'`;
  }

  // Verifica se 'email' foi fornecido como parâmetro e adiciona à consulta
  if (email) {
    // Se 'turma' já foi adicionado à consulta, adiciona um AND
    q += turma ? ` AND email = '${email}'` : ` WHERE email = '${email}'`;
  }

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
});


app.put('/atualizar', (req, res) => {
  const { info, id } = req.body; // Dados do corpo da requisição

  let q = 'UPDATE usuarios SET';

  // Verifica se 'info' foi fornecido como parâmetro e adiciona à consulta
  if (info) {
    q += ` info = '${info}' `;
  }

  // Verifica se 'id' foi fornecido como parâmetro e adiciona à consulta
  if (id) {
    // Se 'info' já foi adicionado à consulta, adiciona um AND
    q += info ? ` WHERE id = '${id}'` : ` AND id = '${id}'`;
  }

  // Executa a consulta no banco de dados
  db.query(q, (err, data) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    return res.status(200).json({ success: true, data });
  });
});






app.post("/adicionar", (req,res)=>{
    const q = "INSERT INTO usuarios(`email`, `nome`, `turma`, `info`) VALUES(?)";
  
    const values = [
      req.body.email,
      req.body.nome,
      req.body.turma,
      req.body.info,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });

})


app.delete("/deletar:id", (req,res)=>{
    const q = "DELETE FROM usuarios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
})



app.listen(8800, ()=>{
  console.log("rodando servidor")
})