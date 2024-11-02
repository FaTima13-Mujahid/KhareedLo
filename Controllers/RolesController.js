//-------ROLES TABLE CONTROLLER (CRUD)

// --MODEL
const { roles } = require("../Models/Roles");
const { registration } = require("../Models/UserAccount");


//Method -------  POST
//Api   --------  http://localhost:5000/Roles
//Description --  USER ROLES INSERTION FUNCTIONALITY

async function createRoles(req,res) {
  const { role_name, status } = req.body;

  //--- role_name exist find()
  const role_nameExist = await roles.find({
    role_name: role_name.tolowercase(),
  });

  //--- role validate using regex
  const role_nameChecker = /^[A-Za-z]+$/;
//if
  if (role_nameChecker.test(role_name)) {
    if (role_nameExist.length > 0)
      return res.send({ error: "Already added this role" });
    const newRole = await roles.create({
      role_name: role_name.tolowercase(),
      status: status,
    });

    return res.status(201).send({ "data": req.body });
  }

  //else
else{
    return res.status(200).send({"error":"Special character,numbers and extra spaces are not allowed!!"})
}
}



//Method -------  GET
//Api   --------  http://localhost:5000/role
//Description --  ALL USER ROLE WILL BE GET THROUH THIS FUNCIONALITY 



async function getRoles(req, res) {
    const all_roles =await  userRoles.find()

    return res.status(200).send({ "data": all_roles })
}

//--EXPORT FUNCTIONS
module.exports = { createRoles ,getRoles};
