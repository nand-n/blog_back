const { Conversation } = require("../models");

const getAllConversations = async () => {
  try {
    const conversations = await Conversation.find();
    return conversations;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getConversationById = async (id) => {
  try {
    const conversation = await Conversation.findById(id);
    return conversation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createConversation = async (data) => {
  try {
    const conversation = await Conversation.create(data);
    return conversation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateConversation = async (id, data) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(id, data, { new: true });
    return updatedConversation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteConversation = async (id) => {
  try {
    await Conversation.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
};
