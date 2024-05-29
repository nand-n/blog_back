const { TaskService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllTasks = catchAsync(async (req, res) => {
  const tasks = await TaskService.getAllTasks();
  res.json(tasks);
});

const getTaskById = catchAsync(async (req, res) => {
  const task = await TaskService.getTaskById(req.params.id);
  res.json(task);
});

const createTask = catchAsync(async (req, res) => {
  const newTask = await TaskService.createTask(req.body);
  res.status(201).json(newTask);
});

const updateTask = catchAsync(async (req, res) => {
  const updatedTask = await TaskService.updateTask(req.params.id, req.body);
  res.json(updatedTask);
});

const deleteTask = catchAsync(async (req, res) => {
  const deletedTask = await TaskService.deleteTask(req.params.id);
  res.json(deletedTask);
});

const getTasksByType = catchAsync(async (req, res) => {
  const { type } = req.params;
  const tasks = await TaskService.getTasksByType(type);
  res.json(tasks);
});

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByType
};
