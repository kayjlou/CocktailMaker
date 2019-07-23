import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards'
import SearchBar from './components/SearchBar'
import Recipes from './components/assets/Utils/recipes.js'
import axios from 'axios'


class App extends Component {
  state = {
    ingredient: '',
    name: 'Caribbean Boilermaker',
    favorites: [],
    image: 'https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg'

  }

  handleNameSearch = () => {
    console.log('running name search')
    // Recipes.getByName(this.state.name)
    axios.get('/random').then(({ data }) => {
      console.log(`we getting random drinks ${data.drinks}`)
    })
  }
  handleIngredientSearch = () => {
    console.log('running ingredient search')
    Recipes.getByIngredient()
  }
  handleRandomSearch = () => {
    console.log('Running random')
    Recipes.getRandom()
      .then(({ data }) => {
        this.setState({
          name: data.drinks[0].strDrink,
          image: data.drinks[0].strDrinkThumb
        })
      })



  }


  render() {
    return (
      <>
        <SearchBar handleIngredientSearch={this.handleIngredientSearch}
          handleNameSearch={this.handleNameSearch}
          handleRandomSearch={this.handleRandomSearch} />
        <Cards name={this.state.name} image={this.state.image} />
        <h4> {this.state.name}</h4>
      </>

    )
  }
}

export default App;
