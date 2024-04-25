const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  author: String,
  createdDate: String
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
