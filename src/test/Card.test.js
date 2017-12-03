import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card';

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

  it ('should change className after being clicked', () =>{
    const mockFunc = jest.fn();
    const data = {location: 'COLORADO', data: {2004: 1, 2005: .5}}
    const type = 'card'
    const card = shallow(<Card location={data.location} data={data.data} changeClass={mockFunc} type={type}/>)

    expect(mockFunc.mock.calls.length).toEqual(0)

    card.simulate('click')

    expect(mockFunc.mock.calls.length).toEqual(1)
  })

  it ('should have a className of high if the data is over or equal to .5, and low if its under .5', ()=>{
    const mockFunc = jest.fn();
    const data = {location: 'COLORADO', data: {2004: 1, 2005: .5, 2006: .3}}
    const type = 'card'
    const card = shallow(<Card location={data.location} data={data.data} changeClass={mockFunc} type={type}/>)

    expect(card.find('.high').length).toEqual(2)
    expect(card.find('.low').length).toEqual(1)
    
  });

  it('should match snap shot of the card', () => {
    const mockFunc = jest.fn();
    const data = {location: 'COLORADO', data: {2004: 1, 2005: .5}}
    const type = 'card'
    const card = shallow(<Card location={data.location} data={data.data} changeClass={mockFunc} type={type}/>);

    expect(card).toMatchSnapshot();
  })
  

})
