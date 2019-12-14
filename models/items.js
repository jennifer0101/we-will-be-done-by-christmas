const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemsSchema = new Schema({
    contact: { 
        type: String, 
    },
    itemName: { 
        type: String, 
    },
    amountItem: { 
        type: String, 
    },
    expiration: { 
        type: String, 
    },
    takeBy: { 
        type: String,
     },
    note: { 
        type: String,
    }
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;

