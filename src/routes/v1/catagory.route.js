const express = require('express');
const { CatagoryController } = require('../../controllers');
const upload = require('../../utils/fileUpload');

const router = express.Router();
router
    .route('/')
    .get(CatagoryController.getAllCategories)
    .post( CatagoryController.createCategory );

router
    .route('/:id')
    .get(CatagoryController.getCategory)
    .patch(CatagoryController.updateCategory)
    .delete(CatagoryController.deleteCategory)
    


module.exports = router;

