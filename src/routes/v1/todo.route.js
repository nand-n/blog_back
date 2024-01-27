const express = require('express');
const { TodoController } = require('../../controllers');

const router = express.Router();
router
    .route('/')
    .get(TodoController.getAllBlogs)
    .post(TodoController.createBlog );

router
    .route('/:id')
    .get(TodoController.getBlogById)
    .patch(TodoController.updateBlog)
    .delete(TodoController.deleteBlog)
    


module.exports = router;

