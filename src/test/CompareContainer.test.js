import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from '../CompareContainer';


describe('CompareContainer ', () => {

  it('should be defined', () => {
    const mockFunc = jest.fn();
    const compareContainer = shallow(<CompareContainer selectedArray={[]}changeClass={mockFunc} />)
    expect(compareContainer).toBeDefined();
  });

  it('should receive props', () => {
    const mockFunc = jest.fn();
    const compareContainer = shallow(<CompareContainer selectedArray={[]}changeClass={mockFunc} />)

    expect(compareContainer.instance().props.selectedArray).toEqual([])
    expect(compareContainer.instance().props.changeClass).toEqual(mockFunc)
  });

  it('should match snap shot of compare container' , () =>{
    const mockFunc = jest.fn();
    let compareContainer = shallow(<CompareContainer selectedArray={[]} changeClass={mockFunc} compareCard={mockFunc}/>)
    compareContainer = shallow(<CompareContainer selectedArray={[{location: 'COLORADO', data: {2001: .5} }]}changeClass={mockFunc} compareCard={mockFunc}/>)

    expect(compareContainer).toMatchSnapshot();

  })

});
