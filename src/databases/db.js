const Database = require('sqlite-async')

function cria_bd(db){

        db.exec(`

          create table if not exists player(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nick  text,
            name text,
            email text,
            password text

           ) ;
        
        `)
  


}

 module.exports =  Database.open(__dirname + '/databases.sqlite').then(cria_bd)