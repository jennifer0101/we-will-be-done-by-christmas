const router = require("express").Router();
const userRoutes = require("./user");

// User and Item routes
router.use("/user", userRoutes);

module.exports = router;