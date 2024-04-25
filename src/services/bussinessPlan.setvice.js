const { BusinessPlan } = require("../models");

const getAllBusinessPlans = async () => {
    try {
        const businessPlans = await BusinessPlan.find();
        return businessPlans;
    } catch (error) {
        throw new Error(error);
    }
};

const getBusinessPlanById = async (id) => {
    try {
        const businessPlan = await BusinessPlan.findById(id);
        return businessPlan;
    } catch (error) {
        throw new Error(error);
    }
};

const createBusinessPlan = async (businessPlanData) => {
    try {
        const newBusinessPlan = new BusinessPlan(businessPlanData);
        await newBusinessPlan.save();
        return newBusinessPlan;
    } catch (error) {
        throw new Error(error);
    }
};

const updateBusinessPlan = async (id, updatedData) => {
    try {
        const updatedBusinessPlan = await BusinessPlan.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        return updatedBusinessPlan;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteBusinessPlan = async (id) => {
    try {
        const deletedBusinessPlan = await BusinessPlan.findByIdAndDelete(id);
        return deletedBusinessPlan;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getAllBusinessPlans,
    getBusinessPlanById,
    createBusinessPlan,
    updateBusinessPlan,
    deleteBusinessPlan,
};
