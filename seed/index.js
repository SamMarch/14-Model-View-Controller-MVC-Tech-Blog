const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");
const seedComments = require("./comment-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await seedUsers();
  console.log("\n--------- USER SEEDED ---------\n");

  const blogs = await seedBlogs(users);
  console.log("\n--------- BLOG SEEDED ---------\n");

  await seedComments(blogs, users);
  console.log("\n--------- COMMENT SEEDED ---------\n");
};

seedAll();
