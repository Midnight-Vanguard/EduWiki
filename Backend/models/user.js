const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model("User", userSchema)