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
    .get(CatagoryController.getBlogById)
    // .patch(upload.single("image"),CatagoryController.updateBlog)
    .delete(CatagoryController.deleteCategory)
    


module.exports = router;

