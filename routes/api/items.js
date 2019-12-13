const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/user"
router.route("/")
  .post(() => {
    console.log('have a seat, lets talk about this ya stupid api');
    itemsController.create();
  })


  // write the fake data as an array or obj or whatever
  // writh a get method to pass that data back to the client
  // use either the client or preferably postman to get the data



  // .post(itemsController.create);

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(itemsController.findById)
//   .put(itemsController.update)
//   .delete(itemsController.remove);

module.exports = router;