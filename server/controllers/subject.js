const Subject = require('../models/subject');

const getSubjects = async (req, res) => {
  const subjects = await Subject.find({}).select('_id name');
  if (!subjects) res.status(400).send(subjects);
  res.json(subjects);
};

const getSubject = async (req, res) => {
  const topic = await Subject.findById(req.params.id);
  if (!topic) res.status(400).send();
  res.json(topic);
};

module.exports = { getSubjects, getSubject };
