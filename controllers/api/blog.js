const router = require("express").Router();
const { Comment, Blog } = require("../../model");

router.post("/:blog_id/comments", async (req, res) => {
  try {
    const { blog_id } = req.params;
    const { comment } = req.body;
    const { user_id } = req.session;

    const commentData = await Comment.create({
      comment,
      author: user_id,
      blog_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const { user_id } = req.session;

    const blogData = await Blog.create({
      title,
      content,
      author: user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
