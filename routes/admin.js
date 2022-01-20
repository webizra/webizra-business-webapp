const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const imageUploader = require('../helpers/imageUploader');
const {requireAuth, checkUser} = require('../middleware/check__auth')

const router = express.Router();

//admin portfolio
router.get('/', adminController.homePage);
router.get('/addPortfolio', adminController.getAddPortfolio)
router.post('/addPortfolio',  imageUploader.upload.single('image'), adminController.postAddPortfolio)
router.get('/editPortfolio', adminController.getEditPortfolio)
router.post('/editPortfolio', imageUploader.upload.single('image'), adminController.postEditPortfolio)
router.post('deletePortfolio', adminController.postDeletePortfolio)

//admin blog
router.get('/addBlog', adminController.getAddBlog)
router.post('/addBlog', imageUploader.upload.single('image'), adminController.postAddBlog)
router.get('/editBlog', adminController.getEditBlog)
router.post('/editBlog', imageUploader.upload.single('image'), adminController.postEditBlog)

//admin gallery
router.get('/addPhoto', adminController.getAddPhoto)
router.post('/addPhoto', imageUploader.upload.single('image'), adminController.postAddPhoto)
router.get('/editPhoto', adminController.getEditPhoto)
router.post('/editPhoto', imageUploader.upload.single('image'), adminController.postEditPhoto)

module.exports = router;

