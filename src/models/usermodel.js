const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    avatar:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})



module.exports=mongoose.model("user",userSchema)
