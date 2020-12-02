


const Database = require('sqlite-async')
const db = require('./db')
const criaPlay = require('./create_player')
const path = require("path")





   function insere(db){
    
    const criaPlayer = {
      nick : "req.body.nick",
      name: "ka",
      email: "ka@gmail.com",
      password: 123456
    }

 

   criaPlay(db, {criaPlayer})

  }

Database.open(path.join(__dirname , '/databases.sqlite')).then(insere)



 
