const express = require('express');
const { BusinessPlanController } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(BusinessPlanController.getAllBusinessPlans)
    .post(BusinessPlanController.createBusinessPlan);

router
    .route('/:id')
    .get(BusinessPlanController.getBusinessPlanById)
    .patch(BusinessPlanController.updateBusinessPlan)
    .delete(BusinessPlanController.deleteBusinessPlan);

module.exports = router;
