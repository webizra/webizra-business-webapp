const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user')

const Portfolio = sequelize.define('portfolio', {
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
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    client: {
      type: Sequelize.STRING,
    },
    service: {
      type: Sequelize.STRING,
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

Portfolio.belongsTo(User)
  
module.exports = Portfolio; 