const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// Relationships
User.hasMany(Blog, {
  foreignKey: "author",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "author",
});

User.hasMany(Comment, {
  foreignKey: "author",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "author",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comment };
