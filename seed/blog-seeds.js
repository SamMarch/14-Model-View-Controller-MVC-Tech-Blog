const { Blog } = require("../model");

const seedData = async (userId) => {
  const blogData = [
    {
      title: "Blog 1",
      content: "This is blog 1",
      author: userId,
    },
    {
      title: "Blog 2",
      content: "This is blog 2",
      author: userId,
    },
    {
      title: "Blog 3",
      content: "This is blog 3",
      author: userId,
    },
  ];

  const blogs = await Blog.bulkCreate(blogData);
  console.log(blogs);
  const blogIds = blogs.map((blog) => blog.id);
  console.log(blogIds);
  return blogIds;
};

module.exports = seedData;
