const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['finance', 'blog', 'notes' , 'project', 'accounting'], 
  },
  
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
