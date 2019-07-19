import axios from 'axios'

const Recipes = {

  //Search by random
  getRandom: () => axios.get('/random'),

  getByName: (name) =>
    axios.get(`/search/${name}`),

  getByIngredient: (ingredient) => axios.get(`/search/${ingredient}`)

}

export default Recipes