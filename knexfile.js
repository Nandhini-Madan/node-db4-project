module.exports={
    development:{
        client:"sqlite3",
        useNullAsDefault:true,//need for sqlite3
        connection:{
            filename:"./data/receipe.db3",
        },
        migration:{
            directory:"./data/migrations",
        },
        seeds:{
            directory:"./data/seeds",
        },
        //this is neeeded when using foreign keys
        pool:{
            afterCreate:(conn,done)=>{
                //run after connection is made to sqlite engine
                conn.run("PRAGMA foreign_keys=ON",done)//turn on FK enforcement
            }
        }
    }

}