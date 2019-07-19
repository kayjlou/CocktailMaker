import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import SearchBar from './components/SearchBar'
import Recipes from './components/assets/Utils/recipes.js'


class App extends Component {
  state = {
    ingredient: '',
    name: 'margarita',
    favorites: []

  }

  handleNameSearch = () => {
    console.log('running name search')
    Recipes.getByName(this.state.name)
  }
  handleIngredientSearch = () => {
    console.log('running ingredient search')
    Recipes.getByIngredient()
  }
  handleRandomSearch = () => {
    console.log('random search')
    Recipes.getRandom()
  }


  render() {
    return (
      <>
        <SearchBar handleIngredientSearch={this.handleIngredientSearch}
          handleNameSearch={this.handleNameSearch}
          handleRandomSearch={this.handleRandomSearch} />
        <Cards />
      </>

    )
  }
}

export default App;
