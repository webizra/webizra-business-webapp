require("dotenv").config();
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const sendEmail = transporter = nodemailer.createTransport(smtpTransport({
    host: 'webizra@yaksonthreesons.com',
    port: '465',
    password: 'tochukwu@12',
    secure: false, //use SSL-TLS
    auth: {
        user: 'webizra@gmail.com',
        pass: 'tochukwu12',
    },
    tls: {
        rejectUnauthorized: false,
    }
}))

let mailOptions = {
    from: "webizra@gmail.com",
    to: "webizra.business@gmail",
    subject: "want to make enquiries",
    text: "Get in touch soon",
}

transporter.sendMail(mailOptions, (err, success)=>{
    if(err){
        console.log(err)
    } if(success) {
        console.log('email sent successfully')
        success.end
    }
})

module.exports = sendEmail