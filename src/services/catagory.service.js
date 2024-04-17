const { Catagory } = require("../models");

const getAllCatagories = async () => {
    try {
      const catagories = await Catagory.find();
      return catagories;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCatagory = async (id) => {
    try {
      const catagories = await Catagory.findOne({ _id: id });
      return catagories;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getCatagoryById = async (id) => {
    try {
      const catagory = await Catagory.findById(id);
      return catagory;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createCatagory = async (catagoryData) => {
    try {
      const newcatagory = new Catagory(catagoryData);
      await newcatagory.save();
      return newcatagory;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateCatagory = async (id, updatedData) => {
    try {
      const updatedcatagory = await Catagory.findByIdAndUpdate(id, updatedData , { new: true });
      return updatedcatagory;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteCatagory = async (id) => {
    try {
      const deletedcatagory = await Catagory.findByIdAndDelete(id);
      return deletedcatagory;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllCatagories,
    getCatagoryById,
    createCatagory,
    updateCatagory,
    deleteCatagory,
    getCatagory
  };