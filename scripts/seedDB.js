const mongoose = require("mongoose");
const db = require("../models");

// This file empties the items collection and inserts the items below
mongoose.connect(
    process.env.MONGODB_URI ||

// FIGURE OUT IF THIS IS THE CORRECT ADDRESS
    "mongodb://localhost/search"
);

const itemsSeed =[
{  
    image: "../client/public/images/orangejuice.jpg",
    owner: "Travis",
    item: "Orange Juice",
    amount: ".25 Gallon",
    expiration: "Dec 27",
    mustTake: "Dec 24",
    note: "I don't drink from the carton!!!" 
},
{
    image: "../client/public/images/cheddar.jpg",
    owner: "Phelan",
    item: "Cheddar Cheese",
    amount: "1 pound",
    expiration: "Dec 26",
    mustTake: "Dec 22",
    note: ""
},
{
    image: "../client/public/images/lettuce",
    owner: "Matt",
    item: "Romaine Lettuce",
    amount: ".5 lbs",
    expiration: "Dec 23",
    mustTake: "",
    note: "NOT PART OF THE RECALL"
},
{
    image: "../client/public/images/tomatoes",
    owner: "Jean",
    item: "Fresh Tomatos",
    amount: "3 pounds",
    expiration: "Dec 26",
    mustTake: "Dec 23",
    note: ""
},
{
    image: "../client/public/images/candy.jpg",
    owner: "Aaron",
    item: "Halloween Candy",
    amount: "1 pound",
    expiration: "Oct 31,2020",
    mustTake: "Dec 31",
    note: "New Years Resonlution = No Sugar!"
}
]


db.Items
    .remove({})
    .then(() => db.Items.collection.insertMany(itemsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

