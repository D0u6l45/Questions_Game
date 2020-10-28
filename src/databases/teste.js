const Database = require('sqlite-async')

const db = require('./db')
const criaPlay = require('./create_player')


  async function insere(db){

    const criaPlayer = {
      "nick" : "Doug789",
      "name": "ka",
      "email": "ka@gmail.com",
      "password": 123456
    }

 

  await criaPlay(db, {criaPlayer})

  }

Database.open(__dirname + '/databases.sqlite').then(insere)