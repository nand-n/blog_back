const redisClient = require("../config/redis");
const { BlogService } = require("../services");
const upload = require("../utils/fileUpload");

const getAllBlogs = async (req, res) => {
    try {
      const blogs = await BlogService.getAllBlogs();
      redisClient.setEx(req.originalUrl, 3600, JSON.stringify(blogs));
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getBlogById = async (req, res) => {
    try {
      const blog = await BlogService.getBlogById(req.params.id);
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createBlog = async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newBlogData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const newBlog = await BlogService.createBlog(newBlogData);
      redisClient.del('/blogs');
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateBlog = async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatedBlogData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const updatedBlog = await BlogService.updateBlog(req.params.id,updatedBlogData);
      redisClient.del('/blogs');
      res.json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteBlog = async (req, res) => {
    try {
      const deletedBlog = await BlogService.deleteBlog(req.params.id);
      redisClient.del('/blogs');
      res.json(deletedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog: [upload.single('image'), createBlog],
    updateBlog: [upload.single('image'), updateBlog],
    deleteBlog,
  };