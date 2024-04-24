const express = require('express');
const { ConversationController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(ConversationController.getAllConversations)
  .post(ConversationController.createConversation);

router
  .route('/:id')
  .get(ConversationController.getConversationById)
  .patch(ConversationController.updateConversationById)
  .delete(ConversationController.deleteConversationById);

module.exports = router;
