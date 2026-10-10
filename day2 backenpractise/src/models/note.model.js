
const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    user_name : String,
    full_name : String,
    contact_number : String
})

const noteModel = mongoose.model("user_details" , noteSchema)

module.exports = noteModel