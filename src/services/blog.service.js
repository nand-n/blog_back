const { getClient } = require("../config/redis");
const { Blog } = require("../models");

const getAllBlogs = async () => {
    try {
      const blogs = await Blog.find();
     
      return blogs;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getBlogById = async (id) => {
    try {
      const blog = await Blog.findById(id);
      return blog;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createBlog = async (blogData) => {
    try {
      const newBlog = new Blog(blogData);
      await newBlog.save();
      return newBlog;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateBlog = async (id, updatedData) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      return updatedBlog;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteBlog = async (id) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
      return deletedBlog;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  };