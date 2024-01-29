const express = require('express');
const { NoteController } = require('../../controllers');

const router = express.Router();
router
    .route('/')
    .get(NoteController.getAllnote)
    .post(NoteController.createNote );

router
    .route('/:id')
    .get(NoteController.getNoteById)
    .patch(NoteController.updateNote)
    .delete(NoteController.deleteNote)
    


module.exports = router;

