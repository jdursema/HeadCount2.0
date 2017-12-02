import React from 'react';
import { shallow, mount } from 'enzyme';

import CompareContainer from './CompareContainer';

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

});
