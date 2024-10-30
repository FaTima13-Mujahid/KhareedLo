const mongoose = require("mongoose");

//-------Registration table
const UserAccount_model = mongoose.Schema(
    {
  userName: { type: String },
  userEmail: { type: String },
  userPassword: { type: String },
  userImage: { type: String },
  userStatus: { type: String }
}
)

//----export
module.exports = mongoose.model("registration", UserAccount_model);
