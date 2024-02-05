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
      const performance = await Performance.findById(id);
      return performance;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createYearlyGoal = async (yearlyGoalData) => {
    try {
      const createdYearlyGoal = await Performance.create(yearlyGoalData);
        return createdYearlyGoal;
    } catch (error) {
      throw new Error(error);
    }
  };
  const createQuarterlyGoal = async (yearlyGoalId, quarterlyGoalData) => {
    try {
      const yearlyGoal = await Performance.findById(yearlyGoalId);
        yearlyGoal.quarters.push(quarterlyGoalData);
        await yearlyGoal.save();
        return yearlyGoal;
    } catch (error) {
      throw new Error(error);
    }
  };

  const createMonthlyGoal = async (yearlyGoalId, quarterIndex, monthlyGoalData) => {
    try {
      const yearlyGoal = await Performance.findById(yearlyGoalId);
      yearlyGoal.quarters[quarterIndex].months[monthIndex].weeks.push(weeklyGoalData);
      await yearlyGoal.save();
      return yearlyGoal;
    } catch (error) {
      throw new Error(error);
    }
  };

  const createWeeklyGoal = async (yearlyGoalId, quarterIndex, monthIndex, weeklyGoalData) => {
    try {
      const yearlyGoal = await Performance.findById(yearlyGoalId);
      yearlyGoal.quarters[quarterIndex].months[monthIndex].weeks.push(weeklyGoalData);
      await yearlyGoal.save();
      return yearlyGoal;
    } catch (error) {
      throw new Error(error);
    }
  };

  const createDailyGoal = async (yearlyGoalId, quarterIndex, monthIndex, weekIndex, dailyGoalData) => {
    try {
      const yearlyGoal = await Performance.findById(yearlyGoalId);
        yearlyGoal.quarters[quarterIndex].months[monthIndex].weeks[weekIndex].days.push(dailyGoalData);
        await yearlyGoal.save();
        return yearlyGoal;
    } catch (error) {
      throw new Error(error);
    }
  };


  const createTask = async (yearlyGoalId, quarterIndex, monthIndex, weekIndex, dayIndex, taskData) => {
    try {
      const yearlyGoal = await Performance.findById(yearlyGoalId);
      yearlyGoal.quarters[quarterIndex].months[monthIndex].weeks[weekIndex].days[dayIndex].tasks.push(taskData);
      await yearlyGoal.save();
      return yearlyGoal;
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
    createYearlyGoal,
    createQuarterlyGoal,
    createMonthlyGoal,
    createWeeklyGoal,
    createDailyGoal,
    createTask,
    updatePerformance,
    deletePerformance,
  };