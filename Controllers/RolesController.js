//-------ROLES TABLE CONTROLLER (CRUD)

// --MODEL
const role = require("../Models/Roles");
// const { registration } = require("../Models/UserAccount");

// Method -------  POST
// Api   --------  http://localhost:5000/roles
// Description --  CREATE ROLES FUNCTION

async function createRoles(req, res) {
  const { role_name, status } = req.body;

  //--- role_name exist find()
  const role_nameExist = await roles.find({
    role_name: role_name.toLowerCase(),
  });

  //--- role validate using regex
  const role_nameChecker = /^[A-Za-z]+$/;
  if (role_nameChecker.test(role_name)) {
    if (role_nameExist.length > 0)
      return res.send({ error: "Already added this role" });

    const newRole = await roles.create({
      role_name: role_name.toLowerCase(),
      status: status,
    });

    return res.status(201).send({ data: req.body });
  } else {
    return res.status(200).send({
      error: "Special character, numbers and extra spaces are not allowed!!",
    });
  }
}

// Method -------  GET
// Api   --------  http://localhost:5000/roles
// Description -- GET ROLES FUNCTION

async function getRoles(req, res) {
  const all_roles = await roles.find();

  return res.status(200).send({ data: all_roles });
}

// Method -------  DELETE
// Api   --------  http://localhost:5000/roles/:id
// Description -- DELETE ROLES FUNCTION

async function deleteRoles(req, res) {
  try {
    // FINDING ROLE EXIST OR NOT
    const findRole = await roles.find({
      role_name: req.params.id.toLowerCase(),
    });

    if (findRole.length === 0) {
      return res.status(404).send({ error: "Role not defined in database" });
    }

    // PERFORMING DELETE FUNCTIONALITY
    const deleteRole = await roles.deleteOne({
      role_name: req.params.id.toLowerCase(),
    });

    return res.status(200).send("Role deleted successfully!");
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Server error" });
  }
}

//--EXPORT FUNCTIONS
module.exports = { createRoles, getRoles, deleteRoles };
