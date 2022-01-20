const path = require('path');
const express = require('express');
const blogController = require('../controllers/blog');
const imageUploader = require('../helpers/imageUploader');

const router = express.Router();

router.get('/blog', blogController.blog)
router.get('/:blogId', blogController.blogPost)

module.exports = router;