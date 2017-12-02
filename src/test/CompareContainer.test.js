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

  it('shouldnt render anything if two cards are not selected' , () =>{
    const mockFunc = jest.fn();
    
    let compareContainer = shallow(<CompareContainer selectedArray={[]} changeClass={mockFunc} compareCard={mockFunc}/>)

    const cardWriting = compareContainer.find('h3');

    expect(cardWriting.length).toEqual(0)

    compareContainer = shallow(<CompareContainer selectedArray={[{location: 'COLORADO', data: {2001: .5} }]}changeClass={mockFunc} compareCard={mockFunc}/>)

    expect(cardWriting.length).toEqual(0)

  })

});
