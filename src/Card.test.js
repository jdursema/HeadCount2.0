import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
// import setUpTest from './setUpTests';
import Card from './Card';

// configure({ adapter: new Adapter() });

describe('Card Test', () => {

  it('should be defined', () => {
    const card = shallow(<Card />)
    expect(card).toBeDefined();

  })

  describe('Card Tests', () => {
    it('should match the snapshot', () => {
      const mockFunc = jest.fn()

      const renderedApp = shallow( <Card  key={data.location} 
                                          location={data.location} 
                                          data={data.data}
                                          changeClass={mockFunc}
                                          type = {type} 
               />)
     
    })

})
