const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  imageUrl: String,
  body: String,
  category: String,
  createdDate: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;