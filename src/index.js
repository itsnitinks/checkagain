const express=require("express")

const app=express()
const connect=require("./config/db")
app.use(express.json())

const userController=require("./controllers/usercontroller")

app.use("/users",userController)
const port=process.env.PORT|| 3000;

app.listen(port,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening on port ${port}`)
})