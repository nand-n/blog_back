const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batches: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: ['created', 'active', 'paused', 'completed', 'reset'],
    default: 'created',
  },
  timerId: {
    type: Number,
    default: null,
  },
  productiveTime: {
    type: Number,
    default: 0,
  },
  wastedTime: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
