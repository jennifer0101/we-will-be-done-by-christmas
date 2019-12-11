import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/user")
  },
  // Get the saved a user items from the database
  savedUsers: function () {
    return axios.get("/api/user").then(result => result.data);
  },
  // Deletes the user items with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id).then(result => result.data);
  },
  // Saves a user item to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData).then(result => result.data);
  },
  // Get the saved a user item from the database
  savedUsers: function () {
    return axios.get("/api/user").then(result => result.data);
  }
};