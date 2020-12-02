const Database = require('sqlite-async')
const path = require("path")
  function cria_bd(db){

         db.exec(`

          create table if not exists player(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nick  text,
            name text not null,
            email text not null, 
            password text not null

           ) ;
        
        `)
  


}

 module.exports =  Database.open(path.join(__dirname , '/databases.sqlite')).then(cria_bd)