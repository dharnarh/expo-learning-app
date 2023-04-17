const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  topics: [
    {
      title: {
        type: String,
        required: true
      },
      video: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ]
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
