const express = require("express");
const server = express();


function pageLanding(req, res){
      return res.sendFile(__dirname + "/index.html")
}




server
.use(express.static("public"))
.get("/", pageLanding)
.get("/cadastro", (req, res)=>{
            res.sendFile(__dirname + "/cadastro.html")
})

.get("/login", (req, res)=>{
      res.sendFile(__dirname + "/Login.html")
})

.post("/salvo")

.get("/assuntos", (req, res)=>{
      res.sendFile(__dirname + "/assuntos.html")
})

.listen(5500);