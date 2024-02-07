const { Project } = require("../models");

const getAllProjects = async () => {
    try {
      const projects = await Project.find();
      return projects;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getProjectById = async (id) => {
    try {
      const project = await Project.findById(id);
      return project;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createProject = async (projectData) => {
    try {
      const newproject = new Project(projectData);
      await newproject.save();
      return newproject;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateProject = async (id, updatedData) => {
    try {
      const updatedproject = await Project.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      return updatedproject;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteProject = async (id) => {
    try {
      const deletedproject = await Project.findByIdAndDelete(id);
      return deletedproject;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
  };