const express = require('express');
const { GoalController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(GoalController.getAllGoals)
  .post(GoalController.createGoal);

router
  .route('/:id')
  .get(GoalController.getGoalById)
  .patch(GoalController.updateGoal)
  .delete(GoalController.deleteGoal);

module.exports = router;
