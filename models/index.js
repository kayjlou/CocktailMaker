const { Schema, Model } = require('mongoose')

const db = {
  Recipes: require('./Recipes.js')(Schema, model)
}

module.exports = db