import axios from "axios";

export default {
<<<<<<< HEAD
  getUser: function () {
    return axios.get("/api/items")
    // set timeout for 1 second
      // sned back an array of the data you'd expect to get
=======
  getItems: function () {
    return axios.get("/api/items")
  },
  // Get the saved a user items from the database
  savedItems: function (itemsData) {
    return axios.post("/api/items", itemsData).then(result => result.data);
>>>>>>> 19aa52a58667e9b2b8b7f314e53e09c835230c9f
  },
  //Get the saved a user items from the database
  // savedUsers: function (itemsData) {
  //   return axios.post("/api/items", itemsData).then(result => result.data);
  // },
  // // Deletes the user items with the given id
  // deleteUser: function (id) {
  //   return axios.delete("/api/items/" + id).then(result => result.data);
  // },
  // // // Saves a user item to the database
  // saveUser: function (userData) {
  //   return axios.post("/api/items", userData).then(result => result.data);
  // },
};