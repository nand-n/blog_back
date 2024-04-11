const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  topics: [
    {
      name: String,
      color: String,
    }
  ],
  createdDate: { type: Date, default: Date.now },
  projectLink: String, 
  gitHubLink: String
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
