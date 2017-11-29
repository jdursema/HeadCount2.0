import React, { Component } from 'react';
import './style/search.css'

const Search = ({search}) => {
  return(
    <input placeholder='Search' onChange={(event) => search(event.target.value)}/>
  )
}
export default Search;