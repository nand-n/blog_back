const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  content: String,
  color:String,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  createdDate: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', todoSchema);

module.exports = Note;