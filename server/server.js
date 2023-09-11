const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud2"
})

app.use(express.json())
app.use(cors())

  
app.get("/enviar", (req,res)=>{
    
    const q = "SELECT * FROM usuarios";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });

})


app.post("/adicionar", (req,res)=>{
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
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