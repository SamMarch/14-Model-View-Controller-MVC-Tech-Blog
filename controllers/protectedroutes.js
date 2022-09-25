const router = require("express").Router();
const { Blog, User } = require("../model");

/* this is a protected home route */
router.get("/dashboard", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
    where: { author: req.session.user_id },
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render("dashboard", { blogs });
});

module.exports = router;
