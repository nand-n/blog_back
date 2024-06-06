const redisClient = require("../config/redis");
const { ProjectService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllProjects =  catchAsync(async (req, res) => {
      const projects = await ProjectService.getAllProjects();
      res.json(projects);
})
  const getProjectById = catchAsync (async(req, res) => {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const createProject = catchAsync(async (req, res) => {
    try {

      const newproject = await ProjectService.createProject({...req.body } );
      res.status(200).json(newproject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const updateProject = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatedprojectData = {
      ...req.body,
      imageUrl: imageUrl,
    };
    
      const updatedproject = await ProjectService.updateProject(req.params.id,updatedprojectData);
      
      res.json(updatedproject);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deleteProject = catchAsync(async (req, res) => {
    try {
      const deletedproject = await ProjectService.deleteProject(req.params.id);
      
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