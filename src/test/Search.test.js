import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('Search Test', () => {

  it('should be defined', () => {
    const search = shallow(<Search />);

    expect(search).toBeDefined();

  });

  it('should receive props', () => {
    const mockFunc = jest.fn();
    const search = shallow(<Search search={mockFunc} />);

    expect(search.instance().props.search).toEqual(mockFunc);

  });

  it('should match snap shot', () => {
    const mockFunc = jest.fn();
    const search = shallow(<Search search={mockFunc} />);

    expect(search).toMatchSnapshot()
  });

});

