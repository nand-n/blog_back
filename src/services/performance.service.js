const { Performance } = require("../models");

const getAllPerformance = async () => {
    try {
      const Performances = await Performance.find();
      return Performances;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getPerformanceById = async (id) => {
    try {
      const Performance = await Performance.findById(id);
      return Performance;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createPerformance = async (PerformanceData) => {
    try {
      const newPerformance = new Performance(PerformanceData);
      await newPerformance.save();
      return newPerformance;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updatePerformance = async (id, updatedData) => {
    try {
      const updatedPerformance = await Performance.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      return updatedPerformance;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deletePerformance = async (id) => {
    try {
      const deletedPerformance = await Performance.findByIdAndDelete(id);
      return deletedPerformance;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllPerformance,
    getPerformanceById,
    createPerformance,
    updatePerformance,
    deletePerformance,
  };