const router = require("express").Router();
const { Blog, User } = require("../model");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  res.render("homepage", { blogs });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
