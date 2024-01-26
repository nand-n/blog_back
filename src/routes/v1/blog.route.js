const express = require('express');
const { BlogController } = require('../../controllers');

const router = express.Router();
router
    .route('/')
    .get(BlogController.getAllBlogs)
    .post(BlogController.createBlog );

router
    .route('/:id')
    .get(BlogController.getBlogById)
    .patch(BlogController.updateBlog)
    .delete(BlogController.deleteBlog)
    


module.exports = router;

