const express = require("express")
const app = express()


//----------env connect
require("dotenv").config()



//-----db connect
const {connectionDB}=require("./Config/Database")


//---model connectivity
const {roles}= require("./Models/Roles")
const { registration } = require("./Models/UserAccount");

//--------server listen Karna ha
app.listen(process.env.PORT,function(){
    console.log(`server is running on port ${process.env.PORT}`)
    connectionDB()  //invoKing DB
})