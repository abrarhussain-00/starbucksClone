const mongoose = require("mongoose");

const SigninSchema = new mongoose.Schema({
    username : {
        type: String, 
        required : [true, "Username  is required"],
        minlength: [3, "Username must be at least 3 characters"]
    },
    password : {
        type: String, 
        required : [true, "Password is required"],
        minlength: [5, "Password must be at least 5 characters"]
    },
})

const Signin = mongoose.model("Signin", SigninSchema);

module.exports = Signin;