const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await seedUsers();
  console.log("\n--------- USER SEEDED ---------\n");

  const blogs = await seedBlogs(users);
  console.log("\n--------- BLOG SEEDED ---------\n");
};

seedAll();
