import axios from "axios";

export default {
  // getUser: function () {
  //   return axios.get("/api/items")
  // },
  // Get the saved a user items from the database
  savedUsers: function (itemsData) {
    return axios.post("/api/items", itemsData).then(result => result.data);
  },
  // Deletes the user items with the given id
  // deleteUser: function (id) {
  //   return axios.delete("/api/items/" + id).then(result => result.data);
  // },
  // // Saves a user item to the database
  // saveUser: function (userData) {
  //   return axios.post("/api/items", userData).then(result => result.data);
  // },
};