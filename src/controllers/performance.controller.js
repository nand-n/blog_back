const redisClient = require("../config/redis");
const { PerformanceService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const upload = require("../utils/fileUpload");

const getAllPerformance =  catchAsync(async (req, res) => {
      const performances = await PerformanceService.getAllPerformance();
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", performances })
      );
      res.json(performances);
})
  const getPerformanceById = async (req, res) => {
    try {
      const performance = await PerformanceService.getPerformanceById(req.params.id);
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", performance })
      );
      res.json(performance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createPerformance = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
      const newperformance = await PerformanceService.createPerformance(req.body);
      // redisClient.del('/performance');
      res.status(201).json(newperformance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  
  const updatePerformance = catchAsync(async (req, res) => {
    try {
      const updatedperformance = await PerformanceService.updatePerformance(req.params.id,req.body);
      // redisClient.del('/performance');
      res.json(updatedperformance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deletePerformance = catchAsync(async (req, res) => {
    try {
      const deletedperformance = await PerformanceService.deletePerformance(req.params.id);
      // redisClient.del('/performance');
      res.json(deletedperformance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = {
    getAllPerformance,
    getPerformanceById,
    createPerformance,
    updatePerformance,
    deletePerformance,
  };