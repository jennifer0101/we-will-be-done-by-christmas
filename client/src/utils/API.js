import axios from "axios";

export default {
  //Get all items
  getItems: function () {
    return axios.get("/api/items/");
  },
  //Get the items with a given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // // Saves a user item to the database
  savedItems: function (itemsData) {
    console.log('hi');
    console.log(itemsData);
    return axios.post("/api/items", itemsData);
  },
  // Deletes the user items with the given id
  deleteItem: function (id) {
    return axios.delete("/api/items/" + id).then(result => result.data);
  },

  userItemsToCart: function (itemsToCart) {
    console.log(itemsToCart);
    return axios.post("/api/user", itemsToCart);
  } 
};