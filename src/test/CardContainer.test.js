import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../CardContainer';

describe('CardContainer Test', () => {

  it('should be defined', () => {
    const mockFunc = jest.fn();
    const cardArray = [];
    const data = [{location: 'COLORADO', data: {2004: 1, 2005: .5}}]
    const cardContainer = shallow(<CardContainer schoolData={data} changeClass={mockFunc} selectedCards={cardArray} />);

    expect(cardContainer).toBeDefined();

  })

  it('should render mulitple cards', () => {
    const mockFunc = jest.fn();
    const cardArray = [];
    const data = [{location:'COLORADO', data: {2004: 1, 2005: .5}}, {location:'SPRINGFIELD', data: {2004: 1, 2005: .5}}, {location:'ASPEN', data: {2004: 1, 2005: .5}}]

    const renderCardContainer= shallow(<CardContainer schoolData={data} changeClass={mockFunc} selectedCards={cardArray} /> )
    expect(renderCardContainer.find('Card').length).toEqual(3)

  });

  it('should match snap of cardContainer', () => {
    const mockFunc = jest.fn();
    const cardArray = [];
    const data = [{location:'COLORADO', data: {2004: 1, 2005: .5}}, {location:'SPRINGFIELD', data: {2004: 1, 2005: .5}}, {location:'ASPEN', data: {2004: 1, 2005: .5}}]

    const cardContainer= shallow(<CardContainer schoolData={data} changeClass={mockFunc} selectedCards={cardArray} /> );

    expect(cardContainer).toMatchSnapshot();
  })
});
