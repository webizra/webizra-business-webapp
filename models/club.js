const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const  User = require('../models/user')

const Club = sequelize.define('club', {
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

})
// Portfolio.associate = models => {
//   Portfolio.belongsTo(models.User)
//   Portfolio.hasOne(models.User)
//   return Portfolio
// }

Club.belongsTo(User)
  
module.exports = Club; 