const express = require("express");
const app = express();

//----------env connect
require("dotenv").config();

// --- MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//-----db connect
const {connectionDB} = require("./Config/Database")

//--- MODELS IMPORT
const { createRoles, getRoles } = require("./Controllers/RolesController")

//--- ROLES API ROUTE
app.route("/Roles").get(getRoles).post(createRoles)

//--------server listen

app.listen(process.env.PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`)
  connectionDB() // invoking DB
})
