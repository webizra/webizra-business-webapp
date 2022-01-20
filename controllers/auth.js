const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Errors Handling
const handleErrors = (err)=> {
    console.log(err.message)
    let errors = {email: '', password: ''}

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }
    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }
    //validation errors
    if (err.message.includes('Validation error')){
        Object.values(err.errors).forEach((errors)=>{
            errors = errors.message
        })
    }
    return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: maxAge
    })
}

exports.getRegisterPage = (req, res, next) => {
    res.render('auth/register__page', {
        pageTitle: 'Join Our Coding Club',
        path: '/auth/register'
    });
};

exports.postRegister = async (req, res, next) => {
    const foundOne = await User.findOne({where:{email:req.body.email}})
    if(foundOne) {
        res.status(409).json({
            message: 'Email already exists!'
        })
    }else{
        const {firstname, surname, email, password} = req.body
        try {
            const user = await User.create({firstname, surname, email, password})
            const token = createToken(user.id)
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
            res.status(400).json({user: user.id})
        } catch (err) {
            const errors = handleErrors(err)
            res.status(400).json({errors})
        }
    }
}

exports.getLoginPage = (req, res, next) => {
    res.render('auth/login__page', {
        pageTitle: 'Login to Your Account',
        path: '/auth/login'
    })
}

exports.postLogin = (req, res, next) => {
    User.findOne({where:{email: req.body.email}}).then(user =>{
        if(!user){
            res.redirect('/login');
        }else{
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, process.env.JWT_KEY, (err, token)=>{
                        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                        res.status(200).json({ user: user.id });
                    })
                }
            })
        }
    }).catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    })
}

exports.postLogout = (req, res, next) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/')
}


