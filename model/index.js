const User = require("./User");
const Blog = require("./Blog");

// Relationships
User.hasMany(Blog, {
  foreignKey: "author",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "author",
});

module.exports = { User, Blog };
