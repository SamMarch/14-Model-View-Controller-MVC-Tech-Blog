const { Comment } = require("../model");

const seedData = async (blogIds, author) => {
  const commentData = [
    {
      comment: "This is a comment",
      blog_id: blogIds[Math.floor(Math.random() * blogIds.length)],
      author,
    },
    {
      comment: "This is another comment",
      blog_id: blogIds[Math.floor(Math.random() * blogIds.length)],
      author,
    },
    {
      comment: "This is a third comment",
      blog_id: blogIds[Math.floor(Math.random() * blogIds.length)],
      author,
    },
  ];
  const comment = await Comment.bulkCreate(commentData);
  return comment.id;
};

module.exports = seedData;
