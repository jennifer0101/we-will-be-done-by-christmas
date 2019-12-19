const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
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

const User = mongoose.model("User", userSchema);

module.exports = User;

