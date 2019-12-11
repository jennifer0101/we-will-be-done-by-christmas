const mongoose = require("mongoose");
const Schema = mongoose.Schema;const mongoose = require('mongoose');


const itemsSchema = new Schema({
    _id: { type: String, },
    owner: { type: String, trim: true,
        required: "First Name" },
    item: { type: String, trim: true,
        required: "Item description is required" },
    amount: { type: String, trim: true,
        required: "Amount available is required" },
    expiration: { type: String, trim: true,
        required: "Expriation date is required" },
    mustTake: { type: String },
    note: { type: String }
});



const Items = mongoose.model("Items", itemsSchema);

module.exports = Item;

