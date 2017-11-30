import React, { Component } from 'react';
import './App.css'
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import Header from './Header';
import CardContainer from './CardContainer';
import Search from './Search';
import CompareContainer from './CompareContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedArray: []
    }

    this.changeClass = this.changeClass.bind(this);
    this.search = this.search.bind(this);
  }

componentDidMount() {
  const district = new DistrictRepository(kinderData)
  this.setState({data: district.data})
}

search(string)  {
  const district = new DistrictRepository(kinderData)
  let filteredData= district.findAllMatches(string)
  this.setState({data: filteredData})
}

changeClass(location) {
  const district = new DistrictRepository(kinderData);
  let filteredArray = this.state.selectedArray.filter(dataPiece => {
    return dataPiece.location === location
  })
  
    if(filteredArray.length>=1){
      let removedLocationArray = this.state.selectedArray.filter(dataPiece => {
        return dataPiece.location !== location
      })
      this.setState({selectedArray: removedLocationArray})

    } else {
      if(this.state.selectedArray.length<=1){
        const selected = [...this.state.selectedArray, district.findByName(location)];
        this.setState({selectedArray: selected})
      }
      
    }
  
}

compareCards(location1, location2) {
  const district = new DistrictRepository(kinderData)

}

  render() {
    return (
      <div>
        <Header />
        <CompareContainer selectedArray={this.state.selectedArray}changeClass={this.changeClass}/>
        <Search search={this.search}/>
        <CardContainer schoolData={this.state.data} changeClass={this.changeClass} selectedCards = {this.state.selectedArray}/> 
      </div>
    );
  }
}

export default App;
