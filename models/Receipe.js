const db =require("../data/config")

function find(){
    return db("Receipe")
}

module.exports={
    find,
}