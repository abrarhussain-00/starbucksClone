const mongoose = require("mongoose");

const JoinnowSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required : [true, "First name  is required"],
        minlength: [3, "First name must be at least 3 characters"]
    },
    lastName : {
        type: String, 
        required : [true, "Last name  is required"],
        minlength: [3, "Last name must be at least 3 characters"]
    },
    email : {
        type: String, 
        required : [true, "Email is required"],
        minlength: [3, "Email must be at least 3 characters"]
    },
    password : {
        type: String, 
        required : [true, "Password is required"],
        minlength: [5, "Password must be at least 5 characters"]
    },
})

const Joinnow = mongoose.model("Joinnow", JoinnowSchema);

module.exports = Joinnow;