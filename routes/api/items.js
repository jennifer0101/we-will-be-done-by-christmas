const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/user"
router.route("/")
  .post(itemsController.create)
  // .post(itemsController.create);

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(itemsController.findById)
//   .put(itemsController.update)
//   .delete(itemsController.remove);

module.exports = router;