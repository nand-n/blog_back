const redisClient = require("../config/redis");
const { BlogService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const upload = require("../utils/fileUpload");

const getAllBlogs =  catchAsync(async (req, res) => {
      const blogs = await BlogService.getAllBlogs();
      const client = getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", blogs })
      );
      res.json(blogs);
})
  const getBlogById = async (req, res) => {
    try {
      const blog = await BlogService.getBlogById(req.params.id);
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", blog })
      );
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createBlog = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newBlogData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const newBlog = await BlogService.createBlog(newBlogData);
      // redisClient.del('/blogs');
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  
  const updateBlog = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatedBlogData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const updatedBlog = await BlogService.updateBlog(req.params.id,updatedBlogData);
      // redisClient.del('/blogs');
      res.json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deleteBlog = catchAsync(async (req, res) => {
    try {
      const deletedBlog = await BlogService.deleteBlog(req.params.id);
      // redisClient.del('/blogs');
      res.json(deletedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  };