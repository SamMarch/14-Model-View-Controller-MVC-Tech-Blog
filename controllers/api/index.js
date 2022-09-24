const router = require("express").Router();
const authRouter = require("./auth");
const blogRouter = require("./blog");

router.use("/auth", authRouter);
router.use("/blog", blogRouter);

module.exports = router;
