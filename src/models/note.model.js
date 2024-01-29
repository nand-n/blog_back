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

const Note = mongoose.model('Note', todoSchema);

module.exports = Note;