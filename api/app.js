const express = require("express");
const connection = require('./db/connection');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());

app.get('/pessoas', (req, res) => {
  return connection.query('SELECT * FROM pessoas', (err, result) => {
    if (err) throw err;
    return res.json(result);
  });  
});

app.put('/pessoas/:id', (req, res) => {
  const {origem, saldoOrigem, destino, saldoDestino, ultima_movimentacao, ultima_coluna} = req.body
  const {id} = req.params
  return connection.query(`UPDATE pessoas SET ${origem}=${saldoOrigem}, ${destino}=${saldoDestino}, ultimas_movimentacoes=${ultima_movimentacao}, ultimas_nome='${ultima_coluna}'   WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });  
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});