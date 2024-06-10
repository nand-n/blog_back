const { MindmapService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getAllMindmps =  catchAsync(async (req, res) => {
      const mindmap = await MindmapService.getAllMindmap();
      res.json(mindmap);
})
  const getMindmapById = async (req, res) => {
    try {
      const mindmap = await MindmapService.getMindmapById(req.params.id);
      res.json(mindmap);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createMindmap = catchAsync(async (req, res) => {
    try {
      const newmindmap = await MindmapService.createMindmap(req.body);
      res.status(200).json(newmindmap);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  
  const updateMindmap = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatedmindmapData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const updatedmindmap = await MindmapService.updateMindmap(req.params.id,updatedmindmapData);
      res.json(updatedmindmap);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deleteMindmap = catchAsync(async (req, res) => {
    try {
      const deletedmindmap = await MindmapService.deleteMindmap(req.params.id);
      res.json(deletedmindmap);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = {
    getAllMindmps,
    getMindmapById,
    createMindmap,
    updateMindmap,
    deleteMindmap,
  };