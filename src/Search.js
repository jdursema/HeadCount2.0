import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="search-field">
        <input placeholder="Search for school district"
               type="text"
        />
      </div>
    );
  }
}



export default Search;
