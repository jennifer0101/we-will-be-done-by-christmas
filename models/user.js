const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    _id: { type: String },
    email: { type: String },
    email_verified: { type: boolean },
    name: { type: String },
    nickname: { type: String },
    picture: { type: String},
    sub: { type: String },
    note: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
