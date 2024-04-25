const { GoalService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllGoals = catchAsync(async (req, res) => {
  const goals = await GoalService.getAllGoals();
  res.json(goals);
});

const getGoalById = catchAsync(async (req, res) => {
  const goal = await GoalService.getGoalById(req.params.id);
  res.json(goal);
});

const createGoal = catchAsync(async (req, res) => {
  const newGoal = await GoalService.createGoal(req.body);
  res.status(201).json(newGoal);
});

const updateGoal = catchAsync(async (req, res) => {
  const updatedGoal = await GoalService.updateGoal(req.params.id, req.body);
  res.json(updatedGoal);
});

const deleteGoal = catchAsync(async (req, res) => {
  const deletedGoal = await GoalService.deleteGoal(req.params.id);
  res.json(deletedGoal);
});

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
};
