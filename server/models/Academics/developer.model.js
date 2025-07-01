const mongoose = require("mongoose");
const {academicsConn} = require("../../config/connectDB");

// defining the developerSchema
const developerSchema = mongoose.Schema({
    name:String,
    Title:String,
    Roll_Number:String,
    image:String,
    profile:String
})

const Developer = academicsConn.model("Developer", developerSchema);
module.exports = Developer;