const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeroutes");
const protectedRoutes = require("./protectedroutes");
const protectRoutes = require("../utils/protectroutes");

router.use("/api", apiRoutes);
router.use(homeRoutes);
router.use(protectRoutes, protectedRoutes);

module.exports = router;
