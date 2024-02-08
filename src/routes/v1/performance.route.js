const express = require('express');
const { PerformanceController } = require('../../controllers');

const router = express.Router();
router
    .route('/')
    .get(PerformanceController.getAllPerformance)
    .post(PerformanceController.createYearlyGoal );

router
    .route('/:id')
    .get(PerformanceController.getPerformanceById)
    .patch(PerformanceController.updatePerformance)
    .delete(PerformanceController.deletePerformance)
    


module.exports = router;

