const { CatagoryService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllCategories =  catchAsync(async (req, res) => {
    const categories = await CatagoryService.getAllCatagories();
    res.json(categories);
}

)

const getCategory =  catchAsync(async (req, res) => {
    const categories = await CatagoryService.getCatagory(req.params.id);
    res.json(categories);
})


const createCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.createCatagory(req.body);
    res.json(category);
})
const updateCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.updateCatagory(req.params.id, req.body);
    res.json(category);
})
const deleteCategory =  catchAsync(async (req, res) => {
    const category = await CatagoryService.deleteCatagory(req.params.id);
    res.json(category);
})

module.exports ={
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    getCategory
}