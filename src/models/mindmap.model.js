const mongoose = require('mongoose');

const mindmapNodeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, required: true },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    },
    data: {
        label: { type: String, required: true }
    },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    selected: { type: Boolean, default: false },
    positionAbsolute: {
        x: { type: Number },
        y: { type: Number }
    },
    dragging: { type: Boolean, default: false }
});

const mindmapSourceSchema = new mongoose.Schema({
    source: { type: String, required: false },
    sourceHandle: { type: String, default: null },
    target: { type: String, required: false },
    targetHandle: { type: String, default: null },
    id: { type: String, required: false }
});

const mindmapSchema = new mongoose.Schema({
    name:{type:String , required:true},
    sources:[mindmapSourceSchema],
    nodes: [mindmapNodeSchema],
    createdDate: { type: Date, default: Date.now }
});

const Mindmap = mongoose.model('Mindmap', mindmapSchema);

module.exports = Mindmap;
