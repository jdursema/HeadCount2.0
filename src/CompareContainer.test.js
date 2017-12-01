import React from 'react';
import { shallow, mount } from 'enzyme';

import CompareContainer from './CompareContainer';

describe('CompareContainer ', () => {

  it('should be defined', () => {
    const compareContainer = shallow(<CompareContainer selectedArray={[]}changeClass={'changeClass'} />)
    expect(compareContainer).toBeDefined();
  });

  it('should receive props', () => {
    const compareContainer = shallow(<CompareContainer selectedArray={[]}changeClass={'changeClass'} />)

    expect(compareContainer.instance().props.selectedArray).toEqual([])
    expect(compareContainer.instance().props.changeClass).toEqual('changeClass')
  });

});
