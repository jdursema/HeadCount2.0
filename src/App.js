import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';

class App extends Component {
  constructor() {
    super();

  }

  // componentDidMount() {
  //   let district = new DistrictRepository(kinderData);
    
  // }

  

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
