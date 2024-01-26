const { Blog } = require("../models");

const getAllBlogs = async () => {
    try {
      const blogs = await Blog.find();
      return blogs;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };
  
  const getBlogById = async (id) => {
    try {
      const blog = await Blog.findById(id);
      if (!blog) {
        throw new Error('Blog not found');
      }
      return blog;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };
  
  const createBlog = async (blogData) => {
    try {
      const newBlog = new Blog(blogData);
      await newBlog.save();
      return newBlog;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };
  
  const updateBlog = async (id, updatedData) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      if (!updatedBlog) {
        throw new Error('Blog not found');
      }
      return updatedBlog;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };
  
  const deleteBlog = async (id) => {
    try {
      const deletedBlog = await Blog.findByIdAndRemove(id);
      if (!deletedBlog) {
        throw new Error('Blog not found');
      }
      return deletedBlog;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };
  
  module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  };