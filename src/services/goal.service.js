const { Goal } = require("../models");

const getAllGoals = async () => {
  try {
    const goals = await Goal.find();
    return goals;
  } catch (error) {
    throw new Error(error);
  }
};

const getGoalById = async (id) => {
  try {
    const goal = await Goal.findById(id);
    return goal;
  } catch (error) {
    throw new Error(error);
  }
};

const createGoal = async (goalData) => {
  try {
    const newGoal = new Goal(goalData);
    await newGoal.save();
    return newGoal;
  } catch (error) {
    throw new Error(error);
  }
};

const updateGoal = async (id, updatedData) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updatedGoal;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteGoal = async (id) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    return deletedGoal;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
};
