
function pageLanding(req, res){
    return res.render("index.html")
}

function cadastro(req, res){

    return res.render("cadastro.html")
}


function login(req,res){
    return res.render("login.html")
}

function assuntos(req,res){
    return res.render("assuntos.html")
}



module.exports = {pageLanding, cadastro,login,assuntos}