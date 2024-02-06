const catchAsync = require("../utils/catchAsync");

const getAllCategories =  catchAsync(async (req, res) => {
    const categories = await CatagoryService.getAllCatagories();
    res.json(categories);
})

const createCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.createCatagories(req.body);
    res.json(category);
})
const deleteCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.deleteCatagories(req.body);
    res.json(category);
})

module.exports ={
    getAllCategories,
    createCategory
}