const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect("mongodb+srv://nitinks:DmGMIeupefyqzten@cluster0.h5mn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect;