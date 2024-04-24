const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  author: String,
  createdDate: String,
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;