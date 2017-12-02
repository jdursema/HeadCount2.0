import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';

describe('Header Test', () => {

  it('should be defined', () => {
    const header = shallow(<Header />);

    expect(header).toBeDefined();
  });

  it('should match snap shot', () => {
    const header = shallow(<Header />);

    expect(header).toMatchSnapshot();
  });

});
