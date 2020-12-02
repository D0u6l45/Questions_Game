
module.exports = async function (db, {criaPlayer}){
  

  const insercao_dados = await db.run(`
  
        insert into player(
            nick,
            name,
            email,
            password

        ) values(
            "${criaPlayer.nick}",
            "${criaPlayer.name}",
            "${criaPlayer.email}",
            "${criaPlayer.password}"
        )
  
  `)


}