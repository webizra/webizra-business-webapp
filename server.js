require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./config/database')
const cookieParser = require('cookie-parser')
const errorController = require('./controllers/error')
const homepageRoutes = require('./routes/homepage')
const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth')
const blogRoutes = require('./routes/blog')
const clubPageRoutes = require('./routes/club')
const nodemailer = require('nodemailer')
const {requireAuth, checkUser} = require('./middleware/check__auth')


const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(cookieParser())

app.get('*', checkUser);
app.use(homepageRoutes)
app.use('/club',clubPageRoutes)
app.use('/admin', adminRoutes)
app.use('/blog', blogRoutes)
app.use('/auth', authRoutes) 
app.use(errorController.get404)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
