const mongoose=require("mongoose")


//-----roles table
const Roles_model=mongoose.Schema(
    {
        role_name:{type:String,required :[true,"Role be be enter"]},
        status:{type:String,required:[true,"Plese Enter  status"]}
    }
)

//----export
module.exports = mongoose.model("roles", Roles_model)  //"roles"  --tablename