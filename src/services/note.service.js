const { Note } = require("../models");

const getAllNotes = async () => {
    try {
      const notes = await Note.find();
      return notes;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getNoteById = async (id) => {
    try {
      const Note = await Note.findById(id);
      return Note;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createNote = async (NoteData) => {
    try {
      const newNote = new Note(NoteData);
      await newNote.save();
      return newNote;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const updateNote = async (id, updatedData) => {
    try {
      const updatedNote = await Note.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      return updatedNote;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteNote = async (id) => {
    try {
      const deletedNote = await Note.findByIdAndDelete(id);
      return deletedNote;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
  };