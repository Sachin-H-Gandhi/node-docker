const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    userName: {
        type: String,
        require: [true, "User must have a username"],
        unquie: true
    },
    password: {
        type: String,
        require: [true, "Post must have a password"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;