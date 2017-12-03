import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper'
import kinderData from '../../data/kindergartners_in_full_day_program';


describe('App Test', () => {

  it('should be defined', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toBeDefined();

  });

  it('should render the correct components', ()=>{
    const renderedApp = shallow(<App />)
    const foundHeader = renderedApp.find('Header')
    const foundCompareContainer = renderedApp.find('CompareContainer')
    const foundSearch = renderedApp.find('Search')
    const foundCardContainer = renderedApp.find('CardContainer')

    expect(foundHeader.length).toEqual(1)
    expect(foundCompareContainer.length).toEqual(1)
    expect(foundSearch.length).toEqual(1)
    expect(foundCardContainer.length).toEqual(1)
  })

  it('should have a default state', () => {
    const renderedApp = shallow(<App />)

    const district = new DistrictRepository(kinderData);

    const expectedData = district.data
    const expectedSelectedArray=[]

    expect(renderedApp.state('data')).toEqual(expectedData)
    expect(renderedApp.state('selectedArray')).toEqual(expectedSelectedArray)
  })

  it('should match the snap shot', ()=>{
    const renderedApp = shallow(<App />)

    expect(renderedApp).toMatchSnapshot()
  })

  it('should be able to display cards that match the search input', () => {
    const renderedApp = mount(<App/>)
    const district = new DistrictRepository(kinderData);
    const foundSearch = renderedApp.find('Search')
    const searchInput = foundSearch.find('input')

    expect(renderedApp.state('data')).toEqual(district.data)

    searchInput.simulate('change', {target: {value: 'Aspen'}})

    expect(renderedApp.state('data')).toEqual( [{"data": {"2004": 1, "2005": 1, "2006": 1, "2007": 1, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 0.992}, "location": "ASPEN 1"}])

  })

  it('state should equal an empty array if the search input doesnt match any of the data', () => {
    const renderedApp = mount(<App/>)
    const district = new DistrictRepository(kinderData);
    const foundSearch = renderedApp.find('Search')
    const searchInput = foundSearch.find('input')

    searchInput.simulate('change', {target: {value: 'fjgnjkdng'}})

    expect(renderedApp.state('data')).toEqual([])
    
  })

  it('should return full data set if search input is an empty string', () => {
    const renderedApp = mount(<App/>)
    const district = new DistrictRepository(kinderData);
    const foundSearch = renderedApp.find('Search')
    const searchInput = foundSearch.find('input')

    searchInput.simulate('change', {target: {value: ''}})

    expect(renderedApp.state('data')).toEqual(district.data)

  });

  it('should populate selectedArray on click of a card', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);
    const foundCard1 = renderedApp.find('.ASPEN');
    const foundCard2 = renderedApp.find('.SUMMIT')
    expect(renderedApp.state('selectedArray')).toEqual([])
    foundCard1.simulate('click')
    expect(renderedApp.state('selectedArray').length).toEqual(1);
    foundCard2.simulate('click');
    expect(renderedApp.state('selectedArray').length).toEqual(2);

  });

  it('should allow two cards in the selectedArray', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);
    const foundCard1 = renderedApp.find('.ASPEN');
    const foundCard2 = renderedApp.find('.SUMMIT');
    const foundCard3 = renderedApp.find('.AGATE');

     expect(renderedApp.state('selectedArray')).toEqual([])
    foundCard1.simulate('click')
    expect(renderedApp.state('selectedArray').length).toEqual(1);
    foundCard2.simulate('click');
    expect(renderedApp.state('selectedArray').length).toEqual(2);
    foundCard3.simulate('click');
    expect(renderedApp.state('selectedArray').length).toEqual(2);

  })

  it('should take out a card from the selectedArray when clicked on twice', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);
    const foundCard1 = renderedApp.find('.ASPEN');

    expect(renderedApp.state('selectedArray')).toEqual([]);
    foundCard1.simulate('click');
    expect(renderedApp.state('selectedArray').length).toEqual(1);
    foundCard1.simulate('click');
    expect(renderedApp.state('selectedArray').length).toEqual(0);

  })

  it('should have a class name of selected if the card is in the selected array', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);

    const coloradoData= district.data.find(data=> data.location==='COLORADO')
     const aspenData= district.data.find(data=> data.location==='ASPEN 1')

    expect(renderedApp.find('.selected').length).toEqual(0)
     renderedApp.instance().setState({selectedArray: [coloradoData]})
    renderedApp.update()
    expect(renderedApp.find('.selected').length).toEqual(1)

    renderedApp.instance().setState({selectedArray: [coloradoData, aspenData]})
    renderedApp.update()

    expect(renderedApp.find('.selected').length).toEqual(2)

  })

  it('should render the selected cards within the Compare Container', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);

    const coloradoData= district.data.find(data=> data.location==='COLORADO')
    const aspenData= district.data.find(data=> data.location==='ASPEN 1')
    let compareContainerWrapper = renderedApp.find('CompareContainer')

    expect(compareContainerWrapper.find('.card').length).toEqual(0)

    renderedApp.instance().setState({selectedArray: [coloradoData]})
    renderedApp.update()
    compareContainerWrapper = renderedApp.find('CompareContainer')


    expect(compareContainerWrapper.find('.card').length).toEqual(1)

    renderedApp.instance().setState({selectedArray: [coloradoData, aspenData]})
    renderedApp.update()
    compareContainerWrapper = renderedApp.find('CompareContainer')


    expect(compareContainerWrapper.find('.card').length).toEqual(2)
  })

  it('should only render the compare card when two cards are in the selected array', () => {
    const renderedApp = mount(<App/>);
    const district = new DistrictRepository(kinderData);

    const coloradoData= district.data.find(data=> data.location==='COLORADO')
    const aspenData= district.data.find(data=> data.location==='ASPEN 1')
    let compareContainerWrapper = renderedApp.find('CompareContainer')

    expect(compareContainerWrapper.find('.compare-card').length).toEqual(0)

    renderedApp.instance().setState({selectedArray: [coloradoData]})
    renderedApp.update()
    compareContainerWrapper = renderedApp.find('CompareContainer')


    expect(compareContainerWrapper.find('.compare-card').length).toEqual(0)

    renderedApp.instance().setState({selectedArray: [coloradoData, aspenData]})
    renderedApp.update()
    compareContainerWrapper = renderedApp.find('CompareContainer')


    expect(compareContainerWrapper.find('.compare-card').length).toEqual(1)
  })


})
