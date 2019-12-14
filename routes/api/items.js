const router = require("express").Router();
const itemsController = require("../../controllers/itemsController.js");

// Matches with "/api/items"
router
  .route("/")
  .post(itemsController.create)
  .get(itemsController.findAll)
  // .put(itemsController.update)
  // .delete(itemsController.remove);




  // write the fake data as an array or obj or whatever
  // writh a get method to pass that data back to the client
  // use either the client or preferably postman to get the data




// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(itemsController.findById)
//   .put(itemsController.update)
//   .delete(itemsController.remove);

module.exports = router;