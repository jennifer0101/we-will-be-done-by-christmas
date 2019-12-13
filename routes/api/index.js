const router = require("express").Router();
const userRoutes = require("./user");
const itemsRoutes = require("./items");

// User and Item routes
router.use("/user", userRoutes);
router.use("/items", itemsRoutes);

module.exports = router;