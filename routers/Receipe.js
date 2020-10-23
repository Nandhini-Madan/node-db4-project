const express=require("express")
const Receipe=require("../models/Receipe")

const router=express.Router()

router.get("/receipe",async (req,res,next)=>{
    console.log("receipe")
    try{
        const receipe=await Receipe.find()
        res.json(receipe)
    }
    catch(err){
        next(err)
    }
})

module.exports=router