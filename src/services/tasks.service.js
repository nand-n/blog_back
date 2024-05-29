const { Task } = require('../models');

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const createTask = async (taskData) => {
  try {
    const newTask = new Task(taskData);
    await newTask.save();
    return newTask;
  } catch (error) {
    throw new Error(error);
  }
};

const updateTask = async (id, updatedData) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updatedTask;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    return deletedTask;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByType = async (type) => {
  try {
    const tasks = await Task.find({ type });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByType,
};
