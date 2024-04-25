const mongoose = require('mongoose');

const capitalItemSchema = new mongoose.Schema({
    key: Number,
    name: String,
    amount: String,
    goods: String,
    price: String
});

const workingCapitalItemSchema = new mongoose.Schema({
    key: Number,
    month: String,
    staffCosts: String,
    operatingExpenses: String
});

const salesPlanValueSchema = new mongoose.Schema({
    type: String,
    data: [Number]
});

const salesPlanSchema = new mongoose.Schema({
    key: Number,
    productName: String,
    values: {
        price: salesPlanValueSchema,
        quantity: salesPlanValueSchema,
        income: salesPlanValueSchema
    }
});

const costPlanValueSchema = new mongoose.Schema({
    type: String,
    data: [Number]
});

const costPlanSchema = new mongoose.Schema({
    key: Number,
    productName: String,
    values: {
        price: costPlanValueSchema,
        quantity: costPlanValueSchema,
        material: costPlanValueSchema,
        labour: costPlanValueSchema,
        operational: costPlanValueSchema,
        others: costPlanValueSchema,
        capitalExpenditure: costPlanValueSchema
    }
});

const businessProfileSchema = new mongoose.Schema({
    tradeName: String,
    businessOwnerName: String,
    businessAddress: String,
    phoneNumber: String,
    email: String
});

const businessPlanSchema = new mongoose.Schema({
    generalTitle: String,
    generalDescription: String,
    businessIdea: String,
    businessEnvironment: String,
    marketCompetition: String,
    marketingPlan: String,
    capitalItems: [capitalItemSchema],
    workingCapitalItems: [workingCapitalItemSchema],
    salesPlan: [salesPlanSchema],
    costPlan: [costPlanSchema],
    businessProfile: businessProfileSchema,
    totalStartupCapital: Number,
    totalWorkingCapital: Number
});

const BusinessPlan = mongoose.model('BusinessPlan', businessPlanSchema);

module.exports = BusinessPlan;