import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import Header from './Header';
import CardContainer from './CardContainer';
import Search from './Search';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

  }

componentDidMount() {
  const district = new DistrictRepository(kinderData)
  this.setState({data: district.data})

}



  

  render() {
    return (
      <div>
        <Header />
        <Search />
        <CardContainer schoolData={this.state.data}/>
         
      </div>
    );
  }
}

export default App;
