const Category = require('../models/categoryModel');


const getAllCategories =  catchAsync(async (req, res) => {
    const categories = await CatagoryService.getAllCatagories();
    res.json(categories);
})

const createCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.getAllCatagories(req.body);

    res.json(category);
})


module.exports ={
    getAllCategories,
    createCategory
}