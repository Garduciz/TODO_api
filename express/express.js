
import exp from "express"; //importação do modulo
const app = exp() //instanciei 
 
app.get('/', function (req, res) {
  res.send('Olá')
})

app.post('/', function (req, res) {
  res.send('Olá')
})

app.listen(3001, () => {
  console.log("rodando na porta 3001")
});