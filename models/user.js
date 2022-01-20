const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs')

const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notNull: {
          msg: 'Please enter your name'
        },
      },
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notNull: {
          msg: 'Please enter your name'
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING(64),
      validate: {
        len: [8],
      },
    },
})
User.beforeCreate((user, options) => {
  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(user.password, salt)
});
User.prototype.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

module.exports = User; 

