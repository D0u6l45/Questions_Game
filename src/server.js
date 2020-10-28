const express = require("express");
const server = express();


function pageLanding(req, res){
      return res.sendFile(__dirname + "/index.html")
}

function cadastro(req, res){
      return res.sendFile(__dirname + "/cadastro.html")
}



server
.use(express.static("public"))
.get("/", pageLanding)
.get("/cadastro", cadastro )

.get("/login", (req, res)=>{
      res.sendFile(__dirname + "/Login.html")
})

.post("/salvo")

.get("/assuntos", (req, res)=>{
      res.sendFile(__dirname + "/assuntos.html")
})

.listen(5500);