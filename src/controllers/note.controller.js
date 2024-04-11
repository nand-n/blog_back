const redisClient = require("../config/redis");
const { NoteService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const upload = require("../utils/fileUpload");

const getAllnote =  catchAsync(async (req, res) => {
      const note = await NoteService.getAllNotes();
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", note })
      );
      res.json(note);
})
  const getNoteById = async (req, res) => {
    try {
      const note = await NoteService.getNoteById(req.params.id);
      const client = redisClient.getClient();
      client.setEx(
        req.originalUrl,
        3000,
        JSON.stringify({ message: "Data from cache", note })
      );
      res.json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createNote = catchAsync(async (req, res) => {
    try {
      const newnote = await NoteService.createNote(req.body);
      // redisClient.del('/note');
      res.status(200).json(newnote);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  
  const updateNote = catchAsync(async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const updatednoteData = {
      ...req.body,
      imageUrl: imageUrl,
    };
      const updatednote = await NoteService.updateNote(req.params.id,updatednoteData);
      // redisClient.del('/note');
      res.json(updatednote);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  const deleteNote = catchAsync(async (req, res) => {
    try {
      const deletednote = await NoteService.deleteNote(req.params.id);
      // redisClient.del('/note');
      res.json(deletednote);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = {
    getAllnote,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
  };