const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  imageUrl: String,
  body: String,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  createdDate: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', todoSchema);

module.exports = Note;