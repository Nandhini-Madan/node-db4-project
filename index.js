const express=require("express")
const helmet=require("helmet")
const receipe=require("./routers/Receipe")
const instructions=require("./routers/Instructions")
const ingredients=require("./routers/Ingredients")
const server=express()
const port=process.env.PORT||5000

server.use(helmet())
server.use(express.json())
server.use(receipe)
//server.use(instructions)
//server.use(ingredients)


//error fn
server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        message:"something went wrong",
    })
})

server.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`)
})