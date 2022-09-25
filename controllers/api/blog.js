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

router.delete("/:blog_id", async (req, res) => {
  try {
    const { blog_id } = req.params;
    const { user_id } = req.session;

    const blogData = await Blog.destroy({
      where: {
        id: blog_id,
        author: user_id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:blog_id/comment/:comment_id", async (req, res) => {
  try {
    const { comment_id } = req.params;
    console.log(comment_id);
    const { user_id } = req.session;

    const commentData = await Comment.destroy({
      where: {
        id: comment_id,
        author: user_id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
