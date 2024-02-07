const redisClient = require("../config/redis");
const { ProjectService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const upload = require("../utils/fileUpload");

const getAllProjects =  catchAsync(async (req, res) => {
      const projects = await ProjectService.getAllProjects();
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", projects })
      );
      res.json(projects);
})
  const getProjectById = catchAsync (async(req, res) => {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", project })
      );
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const createProject = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newprojectData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const newproject = await ProjectService.createProject(newprojectData);
      // redisClient.del('/projects');
      res.status(201).json(newproject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  
  const updateProject = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatedprojectData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const updatedproject = await ProjectService.updateProject(req.params.id,updatedprojectData);
      // redisClient.del('/projects');
      res.json(updatedproject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deleteProject = catchAsync(async (req, res) => {
    try {
      const deletedproject = await ProjectService.deleteProject(req.params.id);
      // redisClient.del('/projects');
      res.json(deletedproject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
  };