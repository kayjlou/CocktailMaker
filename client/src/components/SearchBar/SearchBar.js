import React, { Component } from "react";
import {
  FormInput,

} from 'shards-react'

export default class SearchBar extends Component {



  render() {
    const { handleIngredientSearch, handleRandomSearch, handleNameSearch } = this.props
    return (
      <>
        <div className='search-div'>
          <h4> Search by Ingredient or drink name </h4>
          <FormInput placeholder="Input search here" className="mb-2" />
          <button onClick={handleNameSearch}>SUBMIT</button>
          <FormInput placeholder="Input search here" className="mb-2" />
          <button onClick={handleIngredientSearch}>SUBMIT</button>
          <button onClick={handleRandomSearch}>Random</button>
        </div>
      </>
    )
  }
}