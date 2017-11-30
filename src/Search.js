import React from 'react';
import './style/search.css'

const Search = ({search}) => {
  return(
    <div className='search-field'>
      <input placeholder='Search' onChange={(event) => search(event.target.value)}/>
    </div>
    
  )

}
export default Search;
