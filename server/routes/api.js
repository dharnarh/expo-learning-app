const express = require('express');
const router = express.Router();
const controller = require('../controllers/subject');

router.get('/', (req, res) => res.send('Works!'));
router.get('/subjects', controller.getSubjects);
router.get('/subject/:id', controller.getSubject);

module.exports = router;