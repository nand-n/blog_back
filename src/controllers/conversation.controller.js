const { ConversationService } = require("../services");

const getAllConversations = async (req, res) => {
  try {
    const conversations = await ConversationService.getAllConversations();
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConversationById = async (req, res) => {
  try {
    const { id } = req.params;
    const conversation = await ConversationService.getConversationById(id);
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createConversation = async (req, res) => {
  try {
    const { title,description,q1, q2, q3, q4, q5 } = req.body;
    const conversation = await ConversationService.createConversation({title,description, q1, q2, q3, q4, q5 });
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateConversationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { q1, q2, q3, q4, q5 } = req.body;
    const updatedConversation = await ConversationService.updateConversation(id, { q1, q2, q3, q4, q5 });
    res.status(200).json(updatedConversation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConversationById = async (req, res) => {
  try {
    const { id } = req.params;
    await ConversationService.deleteConversation(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversationById,
  deleteConversationById,
};
