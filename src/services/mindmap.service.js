const { Mindmap } = require("../models");

const getAllMindmap = async () => {
    try {
      const Mindmaps = await Mindmap.find();
      return Mindmaps;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getMindmapById = async (id) => {
    try {
      const Mindmap = await Mindmap.findById(id);
      return Mindmap;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createMindmap = async (MindmapData) => {
    try {
      const newMindmap = new Mindmap(MindmapData);
      await newMindmap.save();
      return newMindmap;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateMindmap = async (id, updatedData) => {
    try {
      const updatedMindmap = await Mindmap.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      return updatedMindmap;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteMindmap = async (id) => {
    try {
      const deletedmindmap = await Mindmap.findByIdAndDelete(id);
      return deletedmindmap;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllMindmap,
    getMindmapById,
    createMindmap,
    updateMindmap,
    deleteMindmap,
  };