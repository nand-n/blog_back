const express = require('express');
const { TasksController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(TasksController.getAllTasks)
  .post(TasksController.createTask);

router
  .route('/:id')
  .get(TasksController.getTaskById)
  .patch(TasksController.updateTask)
  .delete(TasksController.deleteTask);

module.exports = router;
