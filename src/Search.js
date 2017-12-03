/*eslint-disable no-unused-vars*/
import React from 'react';
import './style/search.css';
import PropTypes from 'prop-types';

const Search = ({search}) => {

  return(
    <div className='search-field'>
      <input placeholder='Search' onChange={(event) => search(event.target.value)}/>
    </div> 
  );
};

export default Search;

Search.propTypes = {
  search: PropTypes.func
};
