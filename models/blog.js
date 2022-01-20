const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const  User = require('../models/user')

const Blog = sequelize.define('blog', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.BLOB,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    year: {
      type: Sequelize.STRING,
      allowNull: false
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false
    }
})
// Portfolio.associate = models => {
//   Portfolio.belongsTo(models.User)
//   Portfolio.hasOne(models.User)
//   return Portfolio
// }

Blog.belongsTo(User)
  
module.exports = Blog; 