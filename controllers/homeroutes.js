const router = require("express").Router();
const { Blog, User, Comment } = require("../model");

/* this is a home route */
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  res.render("homepage", { blogs });
});

/* this is a home route */
router.get("/login", (req, res) => {
  res.render("login");
});

/* this is a protected home route */
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

/* this is home route */
router.get("/blog/:id", async (req, res) => {
  const blogData = await Blog.findByPk(req.params.id, {
    include: [{ model: User }, { model: Comment, include: [{ model: User }] }],
  });
  const blog = blogData.get({ plain: true });
  console.log(blog);
  res.render("blog", { blog });
});

/* comments route needs be in an api, this also would render a comment alone without the blog */

// router.get("/api/comment", async (req, res) => {
//   const commentData = await Comment.findByPk(req.params.id, {
//     include: [{ model: User }, { model: Blog }],
//   });
//   const comment = commentData.get({ plain: true });
//   console.log(comment);
//   res.render("comment", { comment });
// });

module.exports = router;
