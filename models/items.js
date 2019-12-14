const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemsSchema = new Schema({
    // _id: { 
    //     type: String, 
    // },
    owner: { 
        type: String, 
    },
    item: { 
        type: String, 
    },
    amount: { 
        type: String, 
    },
    expiration: { 
        type: String, 
    },
    mustTake: { 
        type: String,
     },
    note: { 
        type: String,
    }
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;

