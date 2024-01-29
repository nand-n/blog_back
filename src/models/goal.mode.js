const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: String,
  completed: { type: Boolean, default: false }
});

const dailyGoalSchema = new mongoose.Schema({
  day: Number,
  tasks: [taskSchema]
});

const weeklyGoalSchema = new mongoose.Schema({
  week: Number,
  days: [dailyGoalSchema]
});

const monthlyGoalSchema = new mongoose.Schema({
  month: Number,
  weeks: [weeklyGoalSchema]
});

const quarterlyGoalSchema = new mongoose.Schema({
  quarter: Number,
  months: [monthlyGoalSchema]
});

const yearlyGoalSchema = new mongoose.Schema({
  year: Number,
  quarters: [quarterlyGoalSchema]
});

const yearlyGoal = mongoose.model('YearlyGoal', yearlyGoalSchema);

module.exports = yearlyGoal;
