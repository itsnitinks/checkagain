const express=require("express")
const User=require("../models/usermodel")
const router=express.Router()

router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec()
        return res.send(user)
    }
    catch(e){
        return res.send(e.message)
    }
})

module.exports=router;