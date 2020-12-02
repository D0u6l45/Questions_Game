const express = require("express");
const server = express();
const Database = require("sqlite-async")
const db = require("./databases/db")



const {savePlayer,pageLanding, cadastro, login , assuntos} = require("./pages")

// function a(db){
// const sql=`
//     drop table player;    
// `
// db.run(sql)
// }


// Database.open(__dirname + "/databases/" + "databases.sqlite").then(a)

const nunjucks = require("nunjucks")
nunjucks.configure("src/view",{

express: server,
noCache: true 
})






server
.use(express.static("public"))
.use(express.urlencoded({extended: true}))




.get("/", pageLanding)
.get("/cadastro", cadastro)
.get("/login",login)

.post("/save",(req,res)=>{
    try {
    const Database = require('sqlite-async')
const db = require('./databases/db')
const criaPlay = require('./databases/create_player')
const path = require("path")


    

  async function insere(db){
    
    const criaPlayer = {
      nick : req.body.nick,
      name: req.body.name,
      email:req.body.email,
      password: req.body.password
    }

 

  await criaPlay(db, {criaPlayer})

  }

Database.open(path.join(__dirname ,'databases' ,  '/databases.sqlite')).then(insere)


res.redirect("/login")

} catch (error) {
    console.log(error)
}
})


.get("/assuntos", assuntos)

.listen(3001);