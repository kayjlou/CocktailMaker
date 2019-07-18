const { Schema, model } = require('mongoose')

const db = {
  Recipes: require('./Recipes.js')(Schema, model)
}

module.exports = db