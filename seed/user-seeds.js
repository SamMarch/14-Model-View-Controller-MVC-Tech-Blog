const { User } = require("../model");

const userData = {
  username: "johndoe",
  first_name: "John",
  last_name: "Doe",
  email: "guest@email.com",
  password: "password123",
};

const seedData = async () => {
  const user = await User.create(userData);
  return user.id;
};

module.exports = seedData;
