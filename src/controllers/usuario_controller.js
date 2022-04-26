//const bd = require("../infra/bd")

const Usuario = require("../models/usuario-models")

module.exports = (app, bd) =>{   

    app.get('/usuario', function (req, res) {

      bd.all('SELECT * FROM USUARIOS', (error, rows) => {
        if(error){
          res.json("ERRO AO SELECIONAR BANCO")
        }else{
          res.json({'BANCO DE USUARIOS' : rows})
        }
        

      })
      //  res.json({"usuario" : bd.usuario})
      //  res.send('Rota ativada com GET e recurso "usuarios" e valores de "usuarios" devem ser retornados' )
      })


      app.post('/usuario', function (req, res) {

        try{
        const body = req.body;
        const novoUsuario = new Usuario(body.nome, body.email, body.senha);
        bd.usuario.push(novoUsuario);
        console.log(bd.usuario)

        res.json({"Novo Usuario" : novoUsuario,
                    "erro": false})
        }catch(error){
          res.json({"message" : "error"})
        }
       // let nome = req.body.nome;
       // let senha = req.body.senha;
      //  res.send(`o nome do usuario é ${nome}, e sua senha é : ${senha}`)
       // console.log(req.body)
      })


      app.get('/usuario/:nome/:email', function(req, res) {
        const recebeEmail = req.params.email
        for( i = 0; i <= bd.length; i++){
          if(bd[i].email == recebeEmail){
          console.log(`usuario de ${recebeEmail}`)
          }console.log('email não encontrado')
        }
       res.json({"Usuario" : req.params.nome, 
                 "Email" : req.params.email})
      })


      app.post('/usuario/:nome/:email', function (req, res) {
        let nome = req.params.nome
        let email = req.params.email
        res.send(`o nome do usuario é ${nome} e o seu email é ${email}`)
      })

      //app.delete('/usuarios/:nome', function(req, res){
      //  const nomeDoPr = req.params.nome;
      //  const indexUsuario = bd.usuario.findIndex(usuario => usuario.nome = nomeDoPr)

      //  if(indexUsuario > -1){
       //   const usuarioDeletado = bd.usuario.splice(indexUsuario, 1)
     //     res.json({'Usuario' : usuarioDeletado})
      //  }else{ 
       //   res.json('Usuario não encontrado')
    //  }
    //  })
      app.delete('/usuario/:email', function(req, res){
        const emailDoPr = req.params.email;
        const indexEmail = bd.usuario.findIndex(usuario => usuario.email = emailDoPr)

        if(indexEmail > -1){
          const emailDeletado = bd.usuario.splice(indexEmail, 1)
          res.json({'email' : emailDeletado})
        }else{ 
          res.json('email não encontrado')
      }
      })
   //   app.put('/usuario/:nome', function(req, res){
   //     const body = req.body;
    //    const nomeDoPr = req.params.nome;
     //   const indexUsuario = bd.usuario.findIndex(usuario => usuario.nome == nomeDoPr)

     //   if(indexUsuario > -1){
       //   const dadoUsuarioAntigo = bd.usuario[indexUsuario];
      //    const dadoUsuarioUp = new Usuario
      //    (body.nome || dadoUsuarioAntigo.nome,
        //    body.email || dadoUsuarioUp.email,
          //  body.senha || dadoUsuarioUp.senha,
          //  dadoUsuarioAntigo.id)

        //    const usuarioNovo = bd.usuario.splice(indexUsuario, 1, dadoUsuarioUp)

       //   res.json({'Usuario' : dadoUsuarioUp,
         //            "usuario Deletado" : usuarioNovo })
     //   }else{ 
     //     res.json('Usuario não encontrado')
   //   }

    //  })
      app.put('/usuario/:email', function(req, res){
        const body = req.body;
        const nomeDoPr = req.params.email;
        const indexUsuario = bd.usuario.findIndex(usuario => usuario.email == nomeDoPr)

        if(indexUsuario > -1){
          const dadoUsuarioAntigo = bd.usuario[indexUsuario];
          const dadoUsuarioUp = new Usuario
          (body.nome || dadoUsuarioAntigo.nome,
            body.email || dadoUsuarioUp.email,
            body.senha || dadoUsuarioUp.senha,
            dadoUsuarioAntigo.id)

            const usuarioNovo = bd.usuario.splice(indexUsuario, 1, dadoUsuarioUp)

          res.json({'Usuario' : dadoUsuarioUp,
                     "usuario Deletado" : usuarioNovo })
        }else{ 
          res.json('Usuario não encontrado')
      }

      })

    }
