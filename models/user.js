const mongoose = require("mongoose");
const Schema = mongoose.Schema;const mongoose = require('mongoose');


const userSchema = new Schema({
    _id: { type: String },
    owner: { type: String },
    item: { type: String },
    amount: { type: String },
    expiration: { type: String},
    mustTake: { type: String },
    note: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

