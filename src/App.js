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
      data: [],
      selectedArray: []
    }

  }

componentDidMount() {
  const district = new DistrictRepository(kinderData)
  this.setState({data: district.data})
}

search = (string)=> {
  const district = new DistrictRepository(kinderData)
  let filteredData= district.findAllMatches(string)
  this.setState({data: filteredData})
}

changeClass = (location) => {
  const district = new DistrictRepository(kinderData);
  let filteredArray = this.state.selectedArray.filter((dataPiece)=>{
    return dataPiece.location === location
  })
  if(this.state.selectedArray.length<=1){
    if(filteredArray.length>=1){
      let removedLocationArray = this.state.selectedArray.filter((dataPiece)=>{
        return dataPiece.location !== location
      })
      this.setState({selectedArray: removedLocationArray})

    } else {
      const selected = [...this.state.selectedArray, district.findByName(location)];
      this.setState({selectedArray: selected})
    }
  }
  
}

  render = () => {
    return (
      <div>
        <Header />
        <Search search={this.search}/>
        <CardContainer schoolData={this.state.data} changeClass={this.changeClass} /> 
      </div>
    );
  }
}

export default App;
