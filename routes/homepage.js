const path = require('path');
const express = require('express');
const homepageController = require('../controllers/homepage');
const sendEmail = require('../helpers/sendEmail');

const router = express.Router();

//GET REQUEST
router.get('/', homepageController.homePage);
router.get('/:portfolioId', homepageController.getPortfolio);

//POST REQUEST
router.post('/sendemail', (req, res)=>{
    const {name, email, message, } = req.body

    const output = `
    <p>you have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Message: ${message}</li>
    </ul>
    `;

    // sendEmail(output)
    res.redirect('/')
})

module.exports = router