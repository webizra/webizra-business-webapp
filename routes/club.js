const path = require('path');
const express = require('express');
const clubPageController = require('../controllers/club');

const router = express.Router();

//GET REQUEST
router.get('/club', clubPageController.clubPage)
// router.get('/:clubId', clubPageController.photoDumb)

//POST REQUEST

module.exports = router;