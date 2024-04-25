const { BusinessPlanService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllBusinessPlans = catchAsync(async (req, res) => {
    const businessPlans = await BusinessPlanService.getAllBusinessPlans();
    res.json(businessPlans);
});

const getBusinessPlanById = catchAsync(async (req, res) => {
    const businessPlan = await BusinessPlanService.getBusinessPlan(req.params.id);
    res.json(businessPlan);
});

const createBusinessPlan = catchAsync(async (req, res) => {
    const businessPlan = await BusinessPlanService.createBusinessPlan(req.body);
    res.json(businessPlan);
});

const updateBusinessPlan = catchAsync(async (req, res) => {
    const businessPlan = await BusinessPlanService.updateBusinessPlan(req.params.id, req.body);
    res.json(businessPlan);
});

const deleteBusinessPlan = catchAsync(async (req, res) => {
    const businessPlan = await BusinessPlanService.deleteBusinessPlan(req.params.id);
    res.json(businessPlan);
});

module.exports = {
    getAllBusinessPlans,
    getBusinessPlanById,
    createBusinessPlan,
    updateBusinessPlan,
    deleteBusinessPlan
};
