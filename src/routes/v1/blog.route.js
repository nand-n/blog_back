const express = require('express');
const { BlogController } = require('../../controllers');
const upload = require('../../utils/fileUpload');

const router = express.Router();
router
    .route('/')
    .get(BlogController.getAllBlogs)
    .post(upload.single("image"), BlogController.createBlog );

router
    .route('/:id')
    .get(BlogController.getBlogById)
    .patch(upload.single("image"),BlogController.updateBlog)
    .delete(BlogController.deleteBlog)
    


module.exports = router;

