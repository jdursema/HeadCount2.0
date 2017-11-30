import React from 'react';
import './style/search.css'

const Search = ({search}) => (
    <input placeholder='Search' onChange={(event) => search(event.target.value)}/>
  );

export default Search;
