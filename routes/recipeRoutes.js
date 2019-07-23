const axios = require('axios')

const { Recipes } = require('../models')

module.exports = app => {

  //Get drink by name search
  app.get('/search/:name', (req, res) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.name}`)
      .then(({ data }) => console.log(data))
      .catch(e => console.log(`ERROR IS ---------- ${e}`))
  })

  //Get ingredient by name 
  app.get('/search/:ingredient', (req, res) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${req.params.ingredient}`)
      .then(({ data }) => console.log(data))
      .catch(e => console.log(`ERROR IS ---------- ${e}`))
  })


  //Get a random cocktail
  app.get('/random', (req, res) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(({ data }) => res.json(data))
      .catch(e => console.log(`ERROR IS ---------- ${e}`))
  })

}