import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import SearchBar from './components/SearchBar'


class App extends Component {
  state = {
    ingredient: '',
    name: '',
    favorites: []

  }

  handleSearchSubmit = () => {
    console.log('running search')
  }
  render() {
    return (
      <>
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <Cards />
      </>

    )
  }
}

export default App;
