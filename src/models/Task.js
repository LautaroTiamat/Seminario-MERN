const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    taskCreated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', taskSchema);