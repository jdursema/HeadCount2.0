import React, { Component } from 'react';

class Search extends Component {
  constructor({Search}) {
    super();
    this.state = {
      input:''
    }
  }
  render(){
    return(
      <div>
        <input placeholder='Search'/>
      </div>
    )
  }
}
export default Search;