import React, { Component } from 'react';
import './App.css'
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

search=(string)=>{
  const district = new DistrictRepository(kinderData)
  let filteredData= district.findAllMatches(string)
  this.setState({data: filteredData})
}



  

  render() {
    return (
      <div>
        <Header />
        <Search search={this.search}/>
        <CardContainer schoolData={this.state.data}/>
         
      </div>
    );
  }
}

export default App;
