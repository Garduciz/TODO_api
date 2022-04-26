const Tarefas = require("../controllers/tarefas_controller")
module.exports = (app) =>{   
app.get('/tarefas', function (req, res) {
  res.json({"tarefas" : bd.tarefas})
  // res.send('Rota ativada com GET e recurso "atividades" e valores de "atividades" devem ser retornados' )
  })
  app.post('/tarefas', function (req, res) {

   // res.send(req.body.nome)
   // console.log(req.body)
  })
}