import React from 'react';
import { shallow, mount } from 'enzyme';
// import ReactDOM from 'react-dom';
// import setUpTest from './setUpTests';
import Card from '../Card';

// configure({ adapter: new Adapter() });

describe('Card Test', () => {

  it('should be defined', () => {
    const mockFunc = jest.fn()
    const data = {location: 'COLORADO', data: {2004: 1, 2005: .5}}
    const type = 'card'   
    const card = shallow(<Card location={data.location} data={data.data} changeClass={mockFunc} type={type}/>)
    expect(card).toBeDefined();

  })

  it ('should receive props', ()=>{
  const mockFunc = jest.fn();
  const data = {location: 'COLORADO', data: {2004: 1, 2005: .5}}
  const type = 'card'
  const card = shallow(<Card location={data.location} data={data.data} changeClass={mockFunc} type={type}/>)
  
  expect(card.instance().props.location).toEqual('COLORADO')
  expect(card.instance().props.data).toEqual({2004: 1, 2005: .5})
  expect(card.instance().props.changeClass).toEqual(mockFunc)
  expect(card.instance().props.type).toEqual(type)
  
  })
  

})
