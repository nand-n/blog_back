const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  imageUrl: String,
  body: String,
  category: String,
  createdDate: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;