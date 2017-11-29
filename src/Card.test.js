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

})
