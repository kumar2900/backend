const mongoose = require("mongoose")

async function connectDB () {
    await mongoose.connect("mongodb+srv://kumar:x2q74h9N6vAMeMUa@backend-learn.fdgoq8k.mongodb.net/backend");

    console.log("database is connected")
}



module.exports = connectDB