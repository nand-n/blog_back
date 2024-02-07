const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  topics:[String],
  createdDate: { type: Date, default: Date.now },
});

const Note = mongoose.model('Project', projectSchema);

module.exports = Note;